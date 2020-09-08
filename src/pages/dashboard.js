import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import { navigate } from 'gatsby';
import IdentityModal from "react-netlify-identity-widget"

import Layout from '../components/layout';
import Profile from '../components/profile';
import PrivateRoute from "../components/private-route"
import RouteBase from '../components/route-base';
import RouteSecret from '../components/route-secret';
import RouteLogin from '../components/route-login';

import 'react-netlify-identity-widget/styles.css'
import "@reach/tabs/styles.css";

const Dashboard = ({ location }) => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		if (location.pathname.match(/^\/dashboard\/?$/)) {
			navigate('/dashboard/login', { replace: true })
		}
	}, [location.pathname])

	const showModal = () => setIsVisible(true)

	return (
		<Layout>
			<Profile showModal={showModal}/>
			<Router>
				<PrivateRoute path="/dashboard/base" component={RouteBase}/>
				<PrivateRoute path="/dashboard/secret" component={RouteSecret}/>
				<RouteLogin path="/dashboard/login" showModal={showModal} />
			</Router>
			<IdentityModal
				showDialog={isVisible}
				onCloseDialog={() => setIsVisible(false)}
			/>
		</Layout>
	)
}

export default Dashboard