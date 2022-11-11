import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import ProductItem from "./ProductItem";
function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const products = [
    {
      id: "hdmdu0t80yjkfqselfc",
      name: "Anatomy",
     
      shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
    },
    {
      id: "3dc7fiyzlfmkfqseqam",
      name: "Ear",
      
      shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
    },
    {
      id: "hdmdu0t80yjkfqdsselfc",
      name: "Nose",
     
      shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
    },
    {
      id: "3dc7fiyzlfasmkfqseqam",
      name: "Clinical Practice Guidelines",
      
      shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
    },
 
  ];

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

    // fetchUserName();
  }, [user, loading]);

  return (
    
      <>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">Our Courses</h4>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No products found!
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
