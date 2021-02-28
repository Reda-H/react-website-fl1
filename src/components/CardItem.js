import { Container, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import BathtubIcon from '@material-ui/icons/Bathtub';
import TvIcon from '@material-ui/icons/Tv';
import WorkIcon from '@material-ui/icons/Work';
import KitchenIcon from '@material-ui/icons/Kitchen';
import WifiIcon from '@material-ui/icons/Wifi';
import EcoIcon from '@material-ui/icons/Eco';
import LockIcon from '@material-ui/icons/Lock';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import blue from '@material-ui/core/colors/blue';
import { Button } from './Button';

function CardItem(props) {
  return (
    <>
      <li className={`cards__item ${props.long} background-${props.background}`}>
        {/* <Link className='cards__item__link' to={props.path}> */}
        <div className="cards__item__div">
          <figure className={`cards__item__pic-wrap`} data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className={`cards__item__info textDecoration-${props.textDecoration}`}>
            {
              props.textDecoration === 'white' ?
                <h5 className='cards__item__text__white'>{props.text}</h5>
                :
                <h5 className='cards__item__text'>{props.text}</h5>
            }
            {props.long &&
              <>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      {props.textDecoration === 'white' ?
                        <RoomServiceIcon style={{ color: blue[50] }} />
                        :
                        <RoomServiceIcon />
                      }
                      {/* <RoomServiceIcon style={{color: blue[50]}}/> */}
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-room" primary="Room facilities" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      {props.textDecoration === 'white' ?
                        <AcUnitOutlinedIcon style={{ color: blue[50] }} />
                        :
                        <AcUnitOutlinedIcon />
                      }
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-ac" primary="Air conditioning" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>

                      {props.textDecoration === 'white' ?
                        <BathtubIcon style={{ color: blue[50] }} />
                        :
                        <BathtubIcon />
                      }
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-bath" primary="Bathroom with bathtub" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      {props.textDecoration === 'white' ?
                        <TvIcon style={{ color: blue[50] }} />
                        :
                        <TvIcon />
                      }
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-tv" primary="Cable TV" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      {props.textDecoration === 'white' ?
                        <WorkIcon style={{ color: blue[50] }} />
                        :
                        <WorkIcon />
                      }
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-work" primary="Desk" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      {props.textDecoration === 'white' ?
                        <KitchenIcon style={{ color: blue[50] }} />
                        :
                        <KitchenIcon />
                      }
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-kitchen" primary="Electric kettle" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      {props.textDecoration === 'white' ?
                        <WifiIcon style={{ color: blue[50] }} />
                        :
                        <WifiIcon />
                      }
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-wifi" primary="Free WiFi in rooms" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      {props.textDecoration === 'white' ?
                        <EcoIcon style={{ color: blue[50] }} />
                        :
                        <EcoIcon />
                      }
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-eco" primary="Eco Systems" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      {props.textDecoration === 'white' ?
                        <LockIcon style={{ color: blue[50] }} />
                        :
                        <LockIcon />
                      }
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-safe" primary="Room safe" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      {props.textDecoration === 'white' ?
                        <PhoneForwardedIcon style={{ color: blue[50] }} />
                        :
                        <PhoneForwardedIcon />
                      }
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-phone" primary="Telephone" />
                  </ListItem>
                </List>
                <div className={`priceButtonContainer-${props.textDecoration} priceButtonContainer`}>
                  {
                    props.textDecoration === 'white' ?
                      <Button className={`priceButton`} style={{ backgroundColor: '#000', color: '#fff' }}>
                        <Typography style={{ fontWeight: '700', fontSize: '28px' }}>
                          2567 DHS
                        </Typography>
                      </Button>
                      :
                      <Button className={`priceButton`}>
                        <Typography style={{ fontWeight: '700', fontSize: '28px' }}>
                          2567 DHS
                        </Typography>
                      </Button>
                  }
                  {console.log(props.textDecoration)}
                  {console.log(props.textDecoration === 'white')}
                </div>
              </>}
          </div>
          {/* </Link> */}
        </div>
      </li>
    </>
  );
}

export default CardItem;
