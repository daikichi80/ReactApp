import React from 'react';
import Article from './Article';
import * as Foobar from './components/Foobar'; //ここは相対パス
import Hoge from './components/hoge';


// class Blog extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       isPublished: false,
//       count:0
//     }
//   }

const Blog = () => {

  return (
    <>
      <Article
        title={"Reactの使い方"}
      // count={this.state.count}
      />
      <Foobar.Foo />
      <Foobar.Bar />
      <Hoge />
    </>
  )

}


//   componentDidMount() {
//     //ボタンクリックされたらいいねをカウントアップする
//   document.getElementById('counter').addEventListener('click',this.countUp)
// }

//   componentDidUpdate() {
//     if (this.state.count >= 10) {
//       this.setState({count:0})
//     }
//   }

//   componentWillUnmount() {
//     document.getElementById('counter').removeEventListener('click',this.countUp)
//   }

  //公開状態を反転させる関数

  
  // countUp = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // };


const authorName = 'torahack';
    
    // return (
    //   <>
    //     <Article
    //       title={"Reactの使い方"}
    //       // count={this.state.count}
          
    //     />
    //     <Foobar.Foo />
    //     <Foobar.Bar />
    //     <Hoge />
    //   </>
    // )
  


export default Blog