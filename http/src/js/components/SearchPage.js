/**
 * Created by Neil on 2017/2/4.
 */
import React from 'react'
import SearchForms from './SearchForms'
import SearchTableCon from './SearchTable'


export default function SearchPage(props) {
    return(
        <div>
            <SearchForms/>
            <SearchTableCon/>
        </div>
    );
}