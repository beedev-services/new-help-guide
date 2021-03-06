import React, { useEffect, useState} from 'react';
import List from '../Base/List';
import withListLoading from '../Base/withListLoading';

function Basics() {
    const ListLoading = withListLoading(List);
    const [appState, setAppState] = useState({
        loading: false,
        tips: null,
    });
console.log(typeof tips);
    useEffect(() => {
        setAppState({ loading: true });
        const basicsURL = `https://beedev-services-help-guide-api.herokuapp.com/api/tips/1`;
        fetch(basicsURL)
            .then((res) => res.json())
            .then((tips) => {
                setAppState({ loading: false, tips: tips.data });
            });
    }, [setAppState]);

    return (
        <div className='guide-wrapper'>
          <div className='guide-header'>
          <h1>Welcome to the Basics Guide:</h1>
          </div>
          <div className='the-tips'>
              <ListLoading isLoading={appState.loading} tips={appState.tips} />
          </div>
      </div>
    );
}

export default Basics;