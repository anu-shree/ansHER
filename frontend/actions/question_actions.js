import * as APIUtil from '../util/questions_api_util';

export const RECEIVE_SINGLE_QUESTION = "RECEIVE_SINGLE_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const UPDATE_ASK_FORM = "UPDATE_ASK_FORM";


export const receiveSingleQuestion = (question) => {
  return ({
    type: RECEIVE_SINGLE_QUESTION,
    question: question
  });
}

export const receiveQuestions = (questions) => {
  return ({
    type: RECEIVE_QUESTIONS,
    questions
  });
}

export const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_ERRORS,
    errors
  });
}

export const updateAskForm = (askForm) => {
  return ({
    type: UPDATE_ASK_FORM,
    askForm: askForm
  });
}


export const createQuestion = (question) => {
  return (dispatch) => {
    return APIUtil.createQuestion(question).then((result) => {
      return dispatch(receiveSingleQuestion(result));
      },
      (errors) => {
        return dispatch(receiveErrors(errors));
      });
  }
}

export const fetchSingleQuestion = (question_data) => {
  return (dispatch) => {
    return APIUtil.fetchSingeleQuestion(question_data).then((result) => {
      return dispatch(receiveSingleQuestion(result))
    });
  }
}

export const fetchQuestions = (topic_id) => {
  return (dispatch) => {
    return APIUtil.fetchQuestions(topic_id).then((result) => {
      return dispatch(receiveQuestions(result))
    });
  }
}

export const likeQuestion = (user_id, question_id) => {
  return (dispatch) => {
    return APIUtil.likeQuestion(user_id, question_id).then((question) => {
      return dispatch(receiveSingleQuestion(question))
    });
  }
}


export const dislikeQuestion = (user_id, question_id, idx) => {
  return (dispatch) => {
    return APIUtil.dislikeQuestion(user_id, question_id, idx).then((question) => {
      return dispatch(receiveSingleQuestion(question))
    });
  }
}



export const likeAnswer = (user_id, answer_id) => {
  return (dispatch) => {
    return APIUtil.likeAnswer(user_id, answer_id).then((question) => {
      return dispatch(receiveSingleQuestion(question))
    });
  }
}


export const dislikeAnswer = (user_id, answer_id) => {
  return (dispatch) => {
    return APIUtil.dislikeAnswer(user_id, answer_id).then((question) => {
      return dispatch(receiveSingleQuestion(question))
    });
  }
}


export const createComment = (new_comment) => {
  return (dispatch) => {
    return APIUtil.createComment(new_comment).then((question) => {
      return dispatch(receiveSingleQuestion(question))
    });
  }
}


export const likeComment = (comment_id) => {
  return (dispatch) => {
    return APIUtil.likeComment(comment_id).then((question) => {
      return dispatch(receiveSingleQuestion(question))
    });
  }
}


export const dislikeComment = (comment_id) => {
  return (dispatch) => {
    return APIUtil.dislikeComment(comment_id).then((question) => {
      return dispatch(receiveSingleQuestion(question))
    });
  }
}

export const watchQuestion = (user_id, question_id) => {
  return (dispatch) => {
    return APIUtil.watchQuestion(user_id, question_id).then((question) => {
      return dispatch(receiveSingleQuestion(question))
    });
  }
}


export const unwatchQuestion = (user_id, question_id) => {
  return (dispatch) => {
    return APIUtil.unwatchQuestion(user_id, question_id).then((question) => {
      return dispatch(receiveSingleQuestion(question))
    });
  }
}
