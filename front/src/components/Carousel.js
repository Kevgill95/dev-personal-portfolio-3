import React from 'react';

import rsz_github_logo from '../assets/images/rsz_github_logo.png';
import rsz_linkedin_logo_service from '../assets/images/rsz_linkedin_logo_service.png';
import rsz_kev from '../assets/images/rsz_kev.jpg';
import '../css/app.css';

import Card from '../components/Card';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
              {
                id: 0,
                title: 'PodcastR app',
                subTitle: 'Add, rate, and review different Podcasts!',
                imgSrc: rsz_kev,
                link: 'https://podcastr-app.herokuapp.com/',
                selected: false
              },
              {
                id: 1,
                title: 'LinkedIn',
                subTitle: 'Connect with me on LinkedIn!',
                imgSrc: rsz_linkedin_logo_service,
                link: 'https://www.linkedin.com/in/kevingillooly/',
                selected: false
              },
              {
                id: 2,
                title: 'Github Profile',
                subTitle: 'My GitHub',
                imgSrc: rsz_github_logo,
                link: 'https://github.com/kevgill95',
                selected: false
              },
            ]
        }
    }

    handleClick = (id, card) => {

      let items = [...this.state.items];
      
      items[id].selected = items[id].selected ? false : true;

      items.forEach(item => {
          if(item.id !== id) {
            item.selected = false;
          }
      });

      this.setState({ items });
    }

    createItems = (items) => {
      return items.map(item => {
        return <Card 
        className="imgFadeInDown"
        item={item} 
        click={e => this.handleClick(item.id, e)} 
        key={item.id} 
        />
      })
    }

    render() {
      return(
            <div className="justify-content-around text-center">
              {this.createItems(this.state.items)}
            </div>
      );
    }

}


export default Carousel;