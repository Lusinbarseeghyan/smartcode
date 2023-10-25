import classes from './Courses.module.css'

const Courses = () => {
    const separateCourses = [
        {
            id: 1,
            name: "HTML",
            price: 10000,
            duration: 8,
            image: "https://smartcode.am/public/image/courses/front-end.svg",
        },
        {
            id: 2,
            name: "Phyton",
            price: 10000,
            duration: 8,
            image: "https://itgen.io/images/tild6235-3737-4162-b464-373530363731__frame_642x.png",
        },
        {
            id: 3,
            name: "UI/UX become smarter",
            price: 10000,
            duration: 8,
            image: "https://smartcode.am/public/image/courses/front-end.svg",
        },
        {
            id: 4,
            name: "Java Script",
            price: 10000,
            duration: 8,
            image: "https://smartcode.am/public/image/courses/front-end.svg",
        },
        {
            id: 1,
            name: "HTML",
            price: 10000,
            duration: 8,
            image: "https://smartcode.am/public/image/courses/front-end.svg",
        },
        {
            id: 2,
            name: "HTML",
            price: 10000,
            duration: 8,
            image: "https://smartcode.am/public/image/courses/front-end.svg",
        },
        {
            id: 3,
            name: "UI/UX become smarter",
            price: 10000,
            duration: 8,
            image: "https://smartcode.am/public/image/courses/front-end.svg",
        },
        {
            id: 4,
            name: "Java Script",
            price: 10000,
            duration: 8,
            image: "https://smartcode.am/public/image/courses/front-end.svg",
        },
    ];

    return <div id="courses" className={classes.cards}>
        {
            separateCourses.map((course)=>{
                return (
                    <div className={classes.course}>
                        <div className={classes.courseImage}>
                            <img src={course.image} alt="img" />
                        </div>
                        <div className="courseInfo">
                            <h2>{course.name}</h2>
                            <button>Տեսնել ավելին</button>
                            <p>{course.price} ֏</p>
                            <p>{course.duration} ամիս</p>
                        </div>
                    </div>
                );
            })
        }
    </div>;
};

export default Courses;
