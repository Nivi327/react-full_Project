import classes from './MainContent.module.css';
import { AiOutlineUsergroupAdd, AiOutlineInfoCircle } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { MdModeEdit } from 'react-icons/md';

import Post from './../UI/Post';

const MainContent = props => {
    return <div className={classes.content}>
        <div className={classes.pages}>
            <div className={classes.left}>
                <span className={classes.selected}>All Posts(32)</span>
                <span>Article</span>
                <span>Event</span>
                <span>Education</span>
                <span>Job</span>
            </div>
            <div className={classes.right}>
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Write a Post</a>
                <span><AiOutlineUsergroupAdd /> Join Group</span>
            </div>
        </div>
        <div className={classes.data}>
            <div className={classes['data-left']}>
                <Post />
            </div>
            <div className={classes['data-right']}>
                <div className={classes.location}>
                    <span className={classes.locate}>
                        <GoLocation /> <span>Nodia, India</span>
                    </span>
                    <MdModeEdit />
                </div>
                <hr />
                <div className={classes.info}>
                    <AiOutlineInfoCircle /> <span>Your location will help us serve better and extend a personalised experience.</span>
                </div>
            </div>
        </div>
    </div>
}

export default MainContent;