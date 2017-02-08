/**
 * Created by Neil on 2017/2/4.
 */
import React from 'react'
import SearchFormsCon from './SearchForms'
import SearchTableCon from './SearchTable'


export default function SearchPage(props) {
    return(
        <div>
            <SearchFormsCon/>
            <SearchTableCon/>
        </div>
    );
}