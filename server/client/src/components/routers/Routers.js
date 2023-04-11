import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../auth/Login";
// import Register from "../auth/Register";
import Register2 from "../auth/Register2";
import Dashboard from "../dashboard/Dashboard";
import Alert from "../layouts/Alert";

import Landing from "../layouts/Landing";
import CreateProfile from "../profile/CreateProfile";
import Profile from "../profile/Profile";
import Profiles from "../profiles/Profiles";
import PrivateRoute from "./PrivateRoute";
import AddExperience from '../profile-forms/AddExperience'
import AddEducation from '../profile-forms/AddEducation'
import Post from '../post/Post';
import Posts from '../posts/Posts'
import Products from "../layouts/Products";
import NotFound from '../layouts/NotFound';

export const Routers = () => {
  return (
    <>
    
    <Alert></Alert>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register2></Register2>} />
        <Route path="/Products" element={<Products></Products>} />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={Dashboard}></PrivateRoute>}
        ></Route>
        <Route
          path="/create-profile"
          element={<PrivateRoute component={CreateProfile}></PrivateRoute>}
        />
        <Route
          path="/edit-profile"
          element={<PrivateRoute component={CreateProfile}></PrivateRoute>}
        />
        <Route
          path="/profile/:id"
          element={<PrivateRoute component={Profile}></PrivateRoute>}
        />
        <Route
          path="/profiles"
          element={<PrivateRoute component={Profiles}></PrivateRoute>}
        ></Route>
          <Route
            path="add-experience"
            element={<PrivateRoute component={AddExperience} />}
          />
          <Route
            path="add-education"
            element={<PrivateRoute component={AddEducation} />}
          />
          <Route path="posts" element={<PrivateRoute component={Posts} />} />
          <Route path="posts/:id" element={<PrivateRoute component={Post} />} />
          <Route path="/*" element={<NotFound />} />
      </Routes>
    
      
    </>
  );
};
