import React from 'react'

import styles from './SimpleRequestsList.module.scss'
import { IRequest } from '../../../../infrastructure/server/http/modules'
import { RequestCard } from '../RequestCard';

interface ISimpleRequestsList {
    requests: IRequest[],
}

export const SimpleRequestsList: React.FC<ISimpleRequestsList> = (props:ISimpleRequestsList) => {
    const {requests} = props;
    console.log(requests)

    return (
        <div className={styles.wrapper}>
            {requests.length === 0 && <div className={styles.empty}>No requests</div>}
            {
                requests.map((request) => {
                    return <RequestCard request={request}/>
                })
            }
        </div>
    )
}
