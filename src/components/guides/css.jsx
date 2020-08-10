import React, { useEffect, useState} from 'react';
import List from '../Base/List';
import withListLoading from '../Base/withListLoading';

function Css() {
    const ListLoading = withListLoading(List);
    const [appState, setAppState] = useState({
        loading: false,
        tips: null,
    });
console.log(typeof tips);
    useEffect(() => {
        setAppState({ loading: true });
        const cssURL = `https://beedev-services-help-guide-api.herokuapp.com/api/tips/3`;
        fetch(cssURL)
            .then((res) => res.json())
            .then((tips) => {
                setAppState({ loading: false, tips: tips.data });
            });
    }, [setAppState]);

    return (
        <div className='guide-wrapper'>
          <div className='guide-header'>
          <h1>Welcome to the CSS Guide:</h1>
          </div>
          <div className='the-tips'>
              <ListLoading isLoading={appState.loading} tips={appState.tips} />
          </div>
      </div>
    );
}

export default Css;