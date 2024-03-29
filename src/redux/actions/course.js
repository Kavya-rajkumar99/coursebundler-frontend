import axios from 'axios';
import { server } from '../store';

export const getAllCourses = (keyword="", category="") => async dispatch => {
  try {
    dispatch({ type: 'allCoursesRequest'});
    const { data } = await axios.get(
      `${server}/courses?keyword=${keyword}&category=${category}`,
    );
    dispatch({ type: 'allCoursesSuccess', payload: data.courses });
  } catch (error) {
    dispatch({
      type: 'allCoursesFailure',
      payload: error.response.data.message,
    });
  }
};

export const getCourseLectures = (id) => async dispatch => {
    try {
      dispatch({ type: 'getCourseRequest'});
      const { data } = await axios.get(
        `${server}/course/${id}`,
        {
            withCredentials:true
        }
      );
      dispatch({ type: 'getCourseSuccess', payload: data.lectures});
    } catch (error) {
      dispatch({
        type: 'getCourseFailure',
        payload: error.response.data.message,
      });
    }
  };