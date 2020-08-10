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
                setAppState({ loading: false, tips: tips });
            });
    }, [setAppState]);

    return (
        <div>
          <h1 style={{textAlign: 'center'}}>Welcome to the Web Developers Basics Guide:</h1>
          <div>
              <ListLoading isLoading={appState.loading} tips={appState.tips} />
          </div>
      </div>
    );
}

// Below alone with out above does work and console.logs the right data

// class Baics extends React.Component {
//     componentDidMount() {
//       const basicsUrl = 'https://beedev-services-help-guide-api.herokuapp.com/api/tips/1';
//       fetch(basicsUrl)
//         .then((response) => response.json())
//         .then((data) => console.log('This is your data', data));
//     }
//     render() {
//       return <h1>my Component has Mounted, Check the browser 'console' </h1>;
//     }
//   }


export default Basics;