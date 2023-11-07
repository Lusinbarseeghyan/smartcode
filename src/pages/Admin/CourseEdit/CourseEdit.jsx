import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectEditableCourse } from "../../../store/slices/courses/coursesSlice";
import { fetchCourseById, saveCourse } from "../../../store/slices/courses/coursesApi";
import classes from "./CourseEdit.module.css";

const CourseEdit = () => {
    const { id } = useParams();
    const course = useSelector(selectEditableCourse);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchCourseById(id));
    }, [id, dispatch]);

    if (!course) {
        return <h1>Not Found</h1>;
    }

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
            id &&
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
                saveCourse({
                    id,
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
        <div className={classes.edit}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    name="shortTitle"
                    placeholder="Short title"
                    defaultValue={course.shortTitle}
                    required
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    autoComplete="off"
                    defaultValue={course.title}
                    required
                />
                <input
                    type="text"
                    name="subtitle"
                    placeholder="Subtitle"
                    autoComplete="off"
                    defaultValue={course.subtitle}
                    required
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Route"
                    autoComplete="off"
                    defaultValue={course.name}
                    required
                />
                <input
                    type="number"
                    name="duration"
                    placeholder="Duration"
                    autoComplete="off"
                    defaultValue={course.duration}
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    autoComplete="off"
                    defaultValue={course.price}
                    required
                />
                <input
                    type="text"
                    name="smallPoster"
                    placeholder="Small poster link"
                    autoComplete="off"
                    defaultValue={course.posters.small}
                    required
                />
                <input
                    type="text"
                    name="bigPoster"
                    placeholder="Big poster link"
                    autoComplete="off"
                    defaultValue={course.posters.big}
                    required
                />
                <p>Description</p>
                <input
                    type="text"
                    name="mainTitle"
                    placeholder="Main title"
                    autoComplete="off"
                    defaultValue={course.description.mainTitle}
                    required
                />
                <p>Stages</p>
                <input
                    type="text"
                    name="stage1"
                    placeholder="Stage 1"
                    autoComplete="off"
                    defaultValue={course.description.stages.first}
                />
                <input
                    type="text"
                    name="stage2"
                    placeholder="Stage 2"
                    autoComplete="off"
                    defaultValue={course.description.stages.second}
                />
                <input
                    type="text"
                    name="stage3"
                    placeholder="Stage 3"
                    autoComplete="off"
                    defaultValue={course.description.stages.third}
                />
                <input
                    type="text"
                    name="stage4"
                    placeholder="Stage 4"
                    autoComplete="off"
                    defaultValue={course.description.stages.fourth}
                />
                <input
                    type="text"
                    name="content"
                    placeholder="Content"
                    autoComplete="off"
                    defaultValue={course.description.content}
                    required
                />
                <input
                    type="text"
                    name="offer"
                    placeholder="Offer"
                    autoComplete="off"
                    defaultValue={course.description.offer}
                    required
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default CourseEdit;
