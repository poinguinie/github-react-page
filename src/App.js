import './App.css';
import menuButton from './contents/images/menu.svg';
import Navi from './contents/Navi';
import HomeContents from './contents/HomeContents';
import ProfileContent from './contents/Profile';
import Footer from './contents/Footer';
import SlideMenu from 'react-slide-menu'
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentMode : 'home',
      isOpen : true
    }
  }
  getContents() {
    var _contents;
    
    if (this.state.contentMode === 'home') {
      _contents = <HomeContents
        onModeChange={function(mode) {
          console.log(mode);
          var _mode = mode;
          this.setState({
            contentMode : _mode
          });
        }.bind(this)}>
      </HomeContents>
    }
    else if (this.state.contentMode === 'profile') {
      _contents = <ProfileContent>
      </ProfileContent>
    }
    else if (this.state.contentMode === 'googleDrive') {
      alert('GoogleDrive Mode!');
    }
    else if (this.state.contentMode === 'board') {
      alert('Board Mode!');
    }
    else if (this.state.contentMode === 'lab') {
      alert('Lab Mode!');
    }
    
    return _contents;
  }
  render() {
    return (
      <div className="App">
        <SlideMenu
          active={this.state.slideMenuActive}
          reactRouter={true}
          closeMenu={() => this.setState({slideMenuActive: false})}>
          <Navi/>
        </SlideMenu>
        {/*<div className="Menu">
          <img 
            src={menuButton} 
            alt='menuButton'
            width="50px"
            height="50px"
            id="menuImg"
            onClick={function(e) {
                e.preventDefault();
                this.closeMenu();
            }.bind(this)}
          />
        </div>*/}
        <div className="Contents">
          {this.getContents()}
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;