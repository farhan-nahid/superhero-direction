import {
  faBirthdayCake,
  faCartArrowDown,
  faMoneyBillAlt,
  faRestroom,
  faUsers,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SingleActor.css";

const SingleActor = ({ actor }) => {
  const { photo, name, salary, occupation, Birthday, height } = actor;

  return (
    <div className="actor__card">
      <img src={photo} alt={name} />
      <table>
        <tbody>
          <tr>
            <td>
              <FontAwesomeIcon icon={faUsers} />
            </td>
            <td>
              {" "}
              <strong>{name}</strong>{" "}
            </td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon icon={faRestroom} />
            </td>
            <td>{height}</td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon icon={faUserTag} />
            </td>
            <td>{occupation}</td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon icon={faBirthdayCake} />
            </td>
            <td>{Birthday}</td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon icon={faMoneyBillAlt} />
            </td>
            <td>
              {" "}
              <strong>{salary} ৳</strong>{" "}
            </td>
          </tr>
        </tbody>
      </table>
      <button className="hire__me__button">
        {" "}
        <span>
          <FontAwesomeIcon icon={faCartArrowDown} />
        </span>{" "}
        Hire Me
      </button>
    </div>
  );
};

export default SingleActor;
