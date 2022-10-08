import { React, useState } from 'react'
import {v4 as uuid} from 'uuid';

function List(props) {

    return (        
        <ul>
            {props.children}
        </ul>
    )
}

export {List};