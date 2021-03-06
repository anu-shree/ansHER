import React from 'react';
import { withRouter } from 'react-router';
import RightPart from '../right_part';


class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topic_id: 0, body: store.getState().question.askForm, showMenu: true }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
      this.props.fetchTopics();
  }

  componentWillMount() {
    if (this.props.fromTopic) {
      this.setState({showMenu: false})
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newQuestion = {topic_id: this.state.topic_id, body: this.state.body};
    if (this.state.showMenu === false) {
      newQuestion.topic_id = this.props.topicId;
      return this.props.createQuestion(newQuestion).then((success) => {
        this.props.router.push(`/topics/${success.question.topic_id}/questions/${success.question.id}`)
      });
    }
    if (newQuestion.topic_id === 0) {
      newQuestion.topic_id = this.props.topics[0].id
    }
    return this.props.createQuestion(newQuestion).then((success) => {
        this.props.router.push(`/topics/${success.question.topic_id}/questions/${success.question.id}`)
    });
  }


  selectTopic(field) {
    return (e) => this.setState({
      [field]: parseInt(e.currentTarget.value)
    });
  }

  getTopics() {
      return (
        <select name="topics" id='topic-list' onChange={this.selectTopic("topic_id")}>
          { this.props.topics.map((topic) => {
          return  (<option key={`${topic.id}`} value={`${topic.id}`}>{topic.title}</option>);
          })}
        </select>
      );
  }

  showWithoutMenu() {
      const currentTopic = this.props.topics.filter((topic) => {
        if ( topic.id === this.props.topicId) {
          return true;
        }
      });
      if (currentTopic.length > 0) {
        return (
          <div>{`Your question will be posted to the ${currentTopic[0].title}`}</div>
        );
      } else {
        return (<div></div>);
      }
  }

  showMessage() {
    if (this.props.fromTopic) {
      return (
        <div className="noquestions-topic">There are no questions in this topic yet... Post a first interesting question!</div>
        );
    } else {
      return null;
    }
  }

  getAddBtn(field, value) {
    if (field.length > 0) {
      return <input className="ans-btn" type="submit" value={value}/>
    }
    return <button className="not-active-btn">{value}</button>
  }


  getFolloweesQuestionsBlock() {
    if (this.props.currentUser) {
      if (this.props.currentUser.out_follows.length > 0) {
        return <RightPart followees={this.props.currentUser.followees} watched_questions={this.props.currentUser.watched_questions} />
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  render() {
    if (this.state.showMenu === false) {
    return (
    <div>
      <div className="create-question-container">
        {this.showMessage()}
        <form id="ask-question-form" onSubmit={this.handleSubmit} className="create-question-form">
          <div className="question-input">
            <textarea autoFocus={true}
            placeholder="Start writing your question"
            onChange={this.update("body")}
            className="auth-form-input answer-input"/>
          </div>
          <br />
          <div className="button-part">
            <div className="dd-topic-notopic">
              <span className="current-topic-warning">{this.showWithoutMenu()}</span>
            </div>
            <div className="change-topic-btn-container">
              <button className="ans-btn" onClick={() => this.setState({showMenu: true})}>Change Topic</button>
            </div>
            <div id="add-question" className="answer-buttons">
              {this.getAddBtn(this.state.body, 'Ask Question')}
            </div>
          </div>
        </form>
      </div>
      {this.getFolloweesQuestionsBlock()}
    </div>
    );
    } else {
    return (
    <div>
      <div className="create-question-container">
        {this.showMessage()}
        <form id="ask-question-form" onSubmit={this.handleSubmit} className="create-question-form">
          <div className="question-input">
            <textarea autoFocus={true}
            placeholder="Start writing your question"
            onChange={this.update("body")}
            className="auth-form-input answer-input"
            value={this.state.body}/>
          </div>
          <br />
          <div className="button-part">
            <div className="dd-topic">{this.getTopics()}</div>
            <div id="add-question" className="answer-buttons">
              {this.getAddBtn(this.state.body, 'Ask Question')}
            </div>
          </div>
        </form>
      </div>
      {this.getFolloweesQuestionsBlock()}
    </div>
    );

    }
  }

}


export default withRouter(QuestionForm);
