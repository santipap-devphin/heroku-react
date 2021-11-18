import React from 'react';
import { notification, Button } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default class EditorQuill extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // value: '',
    };
    this.reactQuillRef = null
    this.modules = {
      toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image']
        // ["bold", "italic", "underline", "strike", "link", "image", "blockquote", "code"]
      ],
    }
    this.formats = [
      'header',
      'bold',
      'italic',
      'underline',
      'strike',
      'blockquote',
      'list',
      'bullet',
      'link',
      'image'
    ];
  }

  handleChange = (content, delta, source, editor) => this.setState({ value: content });

  prompt = () => {
    notification.open({
      message: 'We got value:',
      description: (
        <span dangerouslySetInnerHTML={{ __html: this.state.value }} />
      ),
    });
  };
  render() {
    return (
      <div className={this.props.className}>
        <ReactQuill
          ref={(el) => { this.reactQuillRef = el }}
          modules={this.modules}
          formats={this.formats}
          value={this.props.value || this.props.defaultValue || ""}
          onChange={this.props.onChange}
          placeholder="Add your content here"
          onBlur={this.props.onBlur}
          height={100}
        />
      </div>
      // responsive and edit
      // <div className="Rich-text-editor">
      //   <ReactQuill value={this.state.value} onChange={this.handleChange} />
      //   <Button style={{ marginTop: 16 }} onClick={this.prompt}>Prompt</Button>
      // </div>
    );
  }
}

// Editor.propTypes = {
//   isRules: PropTypes.bool,
//   data: PropTypes.string,
//   disabled: PropTypes.bool,
//   toolbar: PropTypes.array,
//   onChange: PropTypes.func,
// };
// export default Editor;
