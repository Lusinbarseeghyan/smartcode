import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCourse } from "../../../store/slices/courses/coursesApi";
import classes from "./CourseNew.module.css";

const CourseNew = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const shortTitle = e.target.shortTitle.value.trim();
        const title = e.target.title.value.trim();
        const subtitle = e.target.subtitle.value.trim();
        const name = e.target.name.value.trim();
        const duration = e.target.duration.value.trim();
        const price = e.target.price.value.trim();
        const smallPoster = e.target.smallPoster.value.trim();
        const bigPoster = e.target.bigPoster.value.trim();
        const mainTitle = e.target.mainTitle.value.trim();
        const stage1 = e.target.stage1.value.trim();
        const stage2 = e.target.stage2.value.trim();
        const stage3 = e.target.stage3.value.trim();
        const stage4 = e.target.stage4.value.trim();
        const content = e.target.content.value.trim();
        const offer = e.target.offer.value.trim();

        if (
            name &&
            duration &&
            price &&
            smallPoster &&
            bigPoster &&
            shortTitle &&
            title &&
            subtitle &&
            mainTitle &&
            content &&
            offer
        ) {
            dispatch(
                addCourse({
                    name,
                    duration,
                    price,
                    smallPoster,
                    bigPoster,
                    shortTitle,
                    title,
                    subtitle,
                    mainTitle,
                    content,
                    offer,
                    stage1,
                    stage2,
                    stage3,
                    stage4,
                })
            );
        }

        navigate("/dashboard/courses");
    };

    return (
        <div className={classes.add}>
            <form onSubmit={handleSubmit}>
                <input type="text" autoComplete="off" name="shortTitle" placeholder="Short title" required />
                <input type="text" name="title" placeholder="Title" autoComplete="off" required />
                <input type="text" name="subtitle" placeholder="Subtitle" autoComplete="off" required />
                <input type="text" name="name" placeholder="Route" autoComplete="off" required />
                <input type="number" name="duration" placeholder="Duration" autoComplete="off" required />
                <input type="number" name="price" placeholder="Price" autoComplete="off" required />
                <input
                    type="text"
                    name="smallPoster"
                    placeholder="Small poster link"
                    autoComplete="off"
                    required
                />
                <input
                    type="text"
                    name="bigPoster"
                    placeholder="Big poster link"
                    autoComplete="off"
                    required
                />
                <p>Description</p>
                <input type="text" name="mainTitle" placeholder="Main title" autoComplete="off" required />
                <p>Stages</p>
                <input type="text" name="stage1" placeholder="Stage 1" autoComplete="off" />
                <input type="text" name="stage2" placeholder="Stage 2" autoComplete="off" />
                <input type="text" name="stage3" placeholder="Stage 3" autoComplete="off" />
                <input type="text" name="stage4" placeholder="Stage 4" autoComplete="off" />
                <input type="text" name="content" placeholder="Content" autoComplete="off" required />
                <input type="text" name="offer" placeholder="Offer" autoComplete="off" required />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default CourseNew;
