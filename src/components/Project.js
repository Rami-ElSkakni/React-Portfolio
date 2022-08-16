import Card from "react-bootstrap/Card";
import ReadMore from "../UI/ReadMore";
import classes from "./Project.module.css";
import Button from "../UI/Button";

//img 100px x 180px
function Project(props) {
  return (
    <div className={classes.projectItem}>
      <Card
        style={{ width: "18rem", backgroundColor: "#313134" }}
        className="mt-5 text-white"
      >
        <Card.Img
          variant="top"
          src={require(`../Images/${props.imageName}.jpg`)}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            <ReadMore>{props.description}</ReadMore>
          </Card.Text>
          <Card.Text className="d-flex flex-wrap justify-content-center gap-2">
            {props.languages.map((language) => (
              <div key={props.id} className={classes.langauges}>
                {language}
              </div>
            ))}
          </Card.Text>
          <Button><a href={props.url} className={classes.anchor}>View Project</a></Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Project;
