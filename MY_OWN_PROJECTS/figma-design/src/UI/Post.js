import {Fragment} from 'react'
import classes from './Post.module.css';
import { BsShareFill, BsThreeDots } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';
import Main from './../images/main-page.jpeg';
import Pic1 from './../images/pic1.jpeg';
import Pic2 from './../images/pic2.jpeg';
import Pic3 from './../images/pic3.jpeg';
import Prof1 from './../images/prof1.jpeg';
import Prof2 from './../images/prof2.jpeg';
import Prof3 from './../images/prof3.jpeg';
import Prof4 from './../images/prof4.jpeg';


const Post = props => {

    return <Fragment>
            <div className={classes.post}>
            <img src={Pic1} alt="image" className={classes.image} />
            <div className={classes.name}>✍️  Article</div>
            <div className={classes.description}><span>What if famous brands had regular fonts? Meet RegulaBrands!</span><span><BsThreeDots className={ classes.dots } /></span></div>
            <div className={classes.info}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</div>
            <div className={classes['post-footer']}>
                <span className={classes.profile}>
                    <img src={Prof1} alt="profile-pic" />
                    <span>Sarthak Kamra</span>
                </span>
                <span className={classes.view}>
                    <span className={classes.likes}><AiFillEye /> 1.4k views</span>
                    <span className={classes.share}><BsShareFill/></span>
                </span>
            </div>
        </div>
        <div className={classes.post}>
            <img src={Pic2} alt="image" className={classes.image} />
            <div className={classes.name}>🔬  Education</div>
            <div className={classes.description}><span>Tax Benefits for Investment under National Pension Scheme launched by Government</span><span><BsThreeDots className={ classes.dots } /></span></div>
            <div className={classes.info}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</div>
            <div className={classes['post-footer']}>
                <span className={classes.profile}>
                    <img src={Prof2} alt="profile-pic" />
                    <span>Sarah West</span>
                </span>
                <span className={classes.view}>
                    <span className={classes.likes}><AiFillEye /> 1.4k views</span>
                    <span className={classes.share}><BsShareFill/></span>
                </span>
            </div>
        </div>
        <div className={classes.post}>
            <img src={Pic3} alt="image" className={classes.image} />
            <div className={classes.name}>🗒️  Meetup</div>
            <div className={classes.description}><span>Finance and Investment Elite Social Mixer @Lujiazui</span><span><BsThreeDots className={ classes.dots } /></span></div>
            <div className={classes.info}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</div>
            <div className={classes['post-footer']}>
                <span className={classes.profile}>
                    <img src={Prof3} alt="profile-pic" />
                    <span>Ronal Jones</span>
                </span>
                <span className={classes.view}>
                    <span className={classes.likes}><AiFillEye /> 1.4k views</span>
                    <span className={classes.share}><BsShareFill/></span>
                </span>
            </div>
        </div>
        <div className={classes.post}>
            <div className={classes.name}>💼 Job</div>
            <div className={classes.description}><span>Software Developer</span><span><BsThreeDots className={classes.dots} /></span></div>
            <div className={classes.info}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</div>
            <div className={classes['post-footer']}>
                <span className={classes.profile}>
                    <img src={Prof4} alt="profile-pic" />
                    <span>Joseph Gray</span>
                </span>
                <span className={classes.view}>
                    <span className={classes.likes}><AiFillEye /> 1.4k views</span>
                    <span className={classes.share}><BsShareFill/></span>
                </span>
            </div>
        </div>
    </Fragment>
}

export default Post;