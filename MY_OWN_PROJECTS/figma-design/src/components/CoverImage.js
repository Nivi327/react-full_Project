import classes from './CoverImage.module.css';
import MainImage from './../images/main-page.jpeg';

const CoverImage = props => {
    return <div className={classes.maindiv}>
        <img src={MainImage} alt="image" className={ classes['main-image'] } />
        <div className={classes.image}>
            <div className={classes.name}>Computer Engineering</div>
            <div className={classes.subname}>142,765 Computer Engineers follow this.</div>
        </div>
    </div>
}

export default CoverImage;