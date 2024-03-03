import React from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({
  img,

  logo,
  heading,
  postName,
  positions,
  submitCv,
}) => {
  return (
    <div
      className={[
        classes.mainWrapper,
        "min-h-screen flex items-center justify-center w-full ",
      ].join(" ")}
      style={{ background: "var(--primaryColor)" }}
    >
      <div className={classes.container}>
        <div className={classes.topHeader}>
          <img src={logo} alt="#" className={classes.logo} />
        </div>
        <div className={classes.wrapper}>
          <div className={classes.infoContainer}>
            <h1
              className={classes.heading}
              dangerouslySetInnerHTML={{ __html: heading }}
            ></h1>{" "}
            {/* <div className={classes.postName}>
              <p>{postName}</p>
            </div> */}
            <div className={classes.requirementsContainer}>
              <h3 className={classes.title}>{positions.title}</h3>
              <ul className={classes.requirements}>
                {positions.data.map((el, i) => (
                  <li className={classes.requirement} key={i}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
            <div className={classes.submitCv}>
              <p className={classes.label}>{submitCv.label}</p>
              <a href={`mailto:${submitCv.email}`} className={classes.email}>
                {submitCv.email}
              </a>
            </div>
          </div>
          <div className={classes.imgContainer}>
            <img src={img} alt="#" className={classes.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
