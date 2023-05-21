import React, { useContext, useEffect } from 'react'
import { Context } from '../context/context'
import { useParams } from 'react-router-dom'
import { ImLocation2 } from 'react-icons/im'
import { FaBriefcase, FaUsers , FaUserFriends } from 'react-icons/fa'
import Loader from './Loader'

function UserDetails() {
    const { user, dataUser } = useContext(Context)
    const { login } = useParams()


    useEffect(() => {
        dataUser(login)
    }, [login])

    const {
        avatar_url,
        bio,
        login:title,
        name,
        created_at,
        company,
        blog,
        followers,
        following,
        location,
        email,
        public_repos,
        type,
        twitter_username,
        updated_at
    } = user

    if (!user) {
        return <Loader />
    }
    console.log(user);
    return (
        <div className="details container">
            <div className="details__right">
                <div className="details__image">
                    <img src={avatar_url} alt="user" />
                </div>
                <h2 className="details__title">{title}</h2>
                <p className="details__location"><ImLocation2 /> {location}</p>
                <div className="details__button">
                    <button className="details__github">Github</button>
                    <button className="details__proweb">Proweb</button>
                </div>
                <p className="details__bio">{bio}</p>
            </div>
            <div className="details__left">
                <h1 className="details__name">{name}</h1>
                <div className="details__info">
                    <p className="details__create"> <span>Created date:</span>{created_at}</p>
                    <p className="details__update"> <span>Update date:</span>{updated_at}</p>
                    {company && <p className="details__status"><span>Company:</span>{company}</p>}
                    {blog && <p className="details__status"><span>Website:</span>{blog}</p>}
                    {email && <p className="details__status"><span>Email:</span>{email}</p>}
                    {twitter_username && <p className="details__status"><span>Twitter:</span>{twitter_username}</p>}
                    {type && <p className="details__status"><span>Status:</span>{type}</p>}
                </div>
            </div>

            <div className="details__bottom">
                <div className="details__box">
                    <FaUsers />
                    <div className="">
                        <p className="details__num">{followers}</p>
                        <p className="details__text">User's followers</p>
                    </div>
                </div>
                <div className="details__box">
                    <FaUserFriends />
                    <div className="">
                        <p className="details__num">{following}</p>
                        <p className="details__text">User's following</p>
                    </div>
                </div>
                <div className="details__box">
                    <FaBriefcase />
                    <div className="">
                        <p className="details__num">{public_repos}</p>
                        <p className="details__text">User's reposistories</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails