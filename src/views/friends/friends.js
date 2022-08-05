import React from "react";
import { useParams } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import './friends.css'
import { useEffect } from "react";
import { getFriends } from '../../services/userService'
import { updateFriendList } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
export const Friends = () => {
    const data = useSelector((state)=> state.user.friends)
    const dispatch = useDispatch();
    const { id } = useParams()

    useEffect(()=>{
        getFriends(id).then(result=>{
            dispatch(updateFriendList(result))
        })
    }, [])

    return <div className="content">
        List de amigos
        <ListGroup as="ol" className="list">
            {
                data.map(friend=>{
                    return <ListGroup.Item key={friend.id}
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{friend.name} {friend.surname}</div>
                      {friend.username}
                    </div>
                    {friend.connected ? <Badge bg="success" pill>Online </Badge> : null}
                  </ListGroup.Item>
                })
            }
        </ListGroup>
    </div>
}