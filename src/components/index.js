import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AddBlog from './add-blog/addBlog';
import BlogList from './list-blog/listBlog';


const Main = () => (
    <Switch>
        <Route exact path="/" component={BlogList} />
        <Route exact path="/blogList" component={BlogList} />
        <Route exact path="/addblog" component={AddBlog} />
    </Switch>
)

export default Main;