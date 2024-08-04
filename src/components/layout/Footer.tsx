import React from 'react';
import { Link } from 'react-router-dom';
import facebookIcon from '../../assets/social/facebook-white.svg';
import instagramIcon from '../../assets/social/instagram-white.svg';
import twitterIcon from '../../assets/social/twitter-white.svg';
import appStoreIcon from '../../assets/store/app-store.svg';
import playStoreIcon from '../../assets/store/play-store.svg';
import windowsIcon from '../../assets/store/windows-store.svg';

interface Props {}

const Footer = (props: Props) => {
	return (
		<div className='footer'>
			<div className='container'>
				<div className='footer__top'>
					<ul className='footer__nav flex-row'>
						<li>
							<Link className='footer__nav__link' to='#'>
								Home
							</Link>
						</li>
						<li>
							<Link className='footer__nav__link' to='#'>
								Terms and Conditions
							</Link>
						</li>
						<li>
							<Link className='footer__nav__link' to='#'>
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link className='footer__nav__link' to='#'>
								Collection Statement
							</Link>
						</li>
						<li>
							<Link className='footer__nav__link' to='#'>
								Help
							</Link>
						</li>
						<li>
							<Link className='footer__nav__link border-0' to='#'>
								Manage Account
							</Link>
						</li>
					</ul>

					<p className='footer__copyright'>Copyright © 2024 DEMO Streaming. All Rights Reserved.</p>
				</div>

				<div className='footer__bottom flex-between'>
					<div className='footer__flex-row'>
						<Link to='#'>
							<img src={facebookIcon} alt='Facebook' className='footer__social-icon' />
						</Link>
						<Link to='#'>
							<img src={twitterIcon} alt='Twitter' className='footer__social-icon' />
						</Link>
						<Link to='#'>
							<img src={instagramIcon} alt='Instagram' className='footer__social-icon' />
						</Link>
					</div>

					<div className='footer__flex-row'>
						<Link to='#'>
							<img src={appStoreIcon} alt='App Store' className='footer__store-icon' />
						</Link>
						<Link to='#'>
							<img src={playStoreIcon} alt='Play Store' className='footer__store-icon' />
						</Link>
						<Link to='#'>
							<img src={windowsIcon} alt='Windows Store' className='footer__store-icon' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
