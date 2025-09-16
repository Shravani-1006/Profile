import React from "react";
import myImg from "./image/shra.jpg"; // ensure path is correct

export default function Profile() {
  return (
    <div
      style={{
        fontFamily: "Segoe UI, Arial, sans-serif",
        background: "linear-gradient(135deg, #ae92eeff 0%, #4e54c8 100%)",
        minHeight: "100vh",
        padding: "50px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.93)",
          backdropFilter: "blur(14px)",
          borderRadius: "20px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
          display: "flex",
          gap: "40px",
          padding: "40px",
          alignItems: "center",
          flexWrap: "wrap",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        {/* Profile Image */}
        <div style={{ textAlign: "center", flex: "0 0 auto" }}>
          <img
            src={myImg}
            alt="Shravani Thite"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center top", // show more top part
              transform: "translateY(20px)", // shift image downwards
              border: "6px solid #fff",
              boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05) translateY(20px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(20px)")
            }
          />
        </div>

        {/* Text + Education */}
        <div style={{ flex: "1", minWidth: "280px", textAlign: "left" }}>
          <h2
            style={{
              margin: 0,
              color: "#080202ff",
              fontWeight: 400,
              fontSize: "20px",
            }}
          >
            Hello, I am
          </h2>
          <h1
            style={{
              margin: "10px 0 15px",
              color: "#080202ff",
              fontSize: "36px",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            Shravani Nagesh Thite
          </h1>

          <p
            style={{
              margin: "0 0 22px",
              color: "#080202ff",
              lineHeight: 1.7,
              fontSize: "16px",
              maxWidth: "600px",
            }}
          >
            Passionate about creating elegant and user-friendly digital
            experiences. I design and develop modern websites, web services, and
            online platforms with a focus on clean design and functionality.
          </p>

          {/* Education Section */}
          <div
            style={{
              border: "1.5px solid rgba(255,255,255,0.3)",
              borderRadius: "12px",
              padding: "16px",
              background: "rgba(255,255,255,0.1)",
            }}
          >
            <h3
              style={{
                margin: "0 0 12px",
                color: "#080202ff",
                fontSize: "20px",
              }}
            >
              Education
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: "20px",
                color: "#080202ff",
                fontSize: "15px",
              }}
            >
              <li>
                <strong>School:</strong> New Horizon Public School
              </li>
              <li>
                <strong>College:</strong> Pillai College of Arts, Commerce &
                Science
              </li>
              <li>
                <strong>Degree:</strong> Bachelors of Computer Application (Full
                Stack)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
