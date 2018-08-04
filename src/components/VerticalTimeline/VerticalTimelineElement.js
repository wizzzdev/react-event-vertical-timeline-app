import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';

class VerticalTimelineElement extends Component {
  constructor(props) {
    super(props);
    this.onVisibilitySensorChange = this.onVisibilitySensorChange.bind(this);
    this.state = { visible: false };
  }

  onVisibilitySensorChange(isVisible) {
    if (isVisible) {
      this.setState({ visible: true });
    }
  }

  render() {
    const {
      id,
      children,
      date,
      position,
      style,
      className,
    } = this.props;

    return (
      <div
        id={id}
        className={classNames(className, 'vertical-timeline-element', {
          'vertical-timeline-element--left': position === 'left',
          'vertical-timeline-element--right': position === 'right',
          'vertical-timeline-element--no-children': children === '',
        })}
        style={style}
      >
        <VisibilitySensor onChange={this.onVisibilitySensorChange}>
          <div>
            <span 
              className={`vertical-timeline-element-circle ${
                this.state.visible ? 'bounce-in' : 'is-hidden'
              }`}
            >
            </span>
            <div
              className={`vertical-timeline-element-content ${
                this.state.visible ? 'bounce-in' : 'is-hidden'
              }`}
            >
              {children}
              <span className="vertical-timeline-element-date">{date}</span>
            </div>
          </div>
        </VisibilitySensor>
      </div>
    );
  }
}

VerticalTimelineElement.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  style: PropTypes.shape({}),
  date: PropTypes.string,
  position: PropTypes.string,
};

VerticalTimelineElement.defaultProps = {
  id: '',
  children: '',
  className: '',
  style: null,
  date: '',
  position: '',
};

export default VerticalTimelineElement;
