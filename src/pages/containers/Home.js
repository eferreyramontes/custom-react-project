import React, {Component} from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import HeaderContainer from '../../widgets/containers/header';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';

class Home extends Component {
    state = {
        modalVisible:false,
        // handleError:false,
    }

    handleOpenModal = (media) => {
        this.setState({
            modalVisible:true,
            media
        })
    }

    handleCloseClick = (event) => {
        this.setState({
            modalVisible:false,
        })
    }

    // componentDidCatch(error,info) {
    //     this.setState({
    //              handleError: true   
    //             })
    // }

    render() {
        return (
            <HandleError>
                <HomeLayout>
                    <HeaderContainer>
                        <Related/>      
                    </HeaderContainer>
                    <Categories categories={this.props.data.categories}
                        handleOpenModal={this.handleOpenModal}
                    />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal handleCloseClick={this.handleCloseClick}>
                                <VideoPlayer
                                    autoplay = {false}
                                    src={this.state.media.src}
                                    title={this.state.media.title}
                                />
                            </Modal>
                        </ModalContainer>
                    }
                    
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home;