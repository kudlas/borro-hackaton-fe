import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

// https://reactjs.org/docs/hooks-intro.html
export default function TestButton() {
    const [count, setCount] = useState(0);

    return (<Button variant="contained" color="primary" onClick={() => setCount(count+1)}>
                Kliknuto: {count}
            </Button>
    );
}
