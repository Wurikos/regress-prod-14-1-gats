import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Box, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"new-page1"} />
		<Helmet>
			<title>
				тут содержится текст
			</title>
			<meta name={"description"} content={"тут содержится текст"} />
			<meta property={"og:title"} content={"тут содержится текст"} />
			<meta property={"og:description"} content={"тут содержится текст"} />
			<meta property={"og:image"} content={"https://images.unsplash.com/photo-1610622097351-6e17c38c8686?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"} />
			<link rel={"shortcut icon"} href={"https://images.unsplash.com/photo-1610553303436-c9c3c70d56d2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://images.unsplash.com/photo-1610622097351-6e17c38c8686?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://images.unsplash.com/photo-1610622097351-6e17c38c8686?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://images.unsplash.com/photo-1610622097351-6e17c38c8686?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"} />
			<link rel={"apple-touch-startup-image"} href={"https://images.unsplash.com/photo-1610622097351-6e17c38c8686?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"} />
			<meta name={"msapplication-TileImage"} content={"https://images.unsplash.com/photo-1610623996100-9a9d1cb01aba?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"} />
			<meta name={"msapplication-TileColor"} content={"#b82828"} />
		</Helmet>
		<Section text-align="center" padding="100px 0" sm-padding="40px 0">
			<Text as="h1" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.{" "}
			</Text>
			<Box display="flex" margin="40px 0 20px 0" justify-content="space-around" sm-flex-direction="column">
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1501870190084-cdf29f15ef87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1503341960582-b45751874cf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
				</Box>
			</Box>
		</Section>
		<Section background="--color-darkL2" padding="64px 0" sm-padding="40px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						color="--dark"
						padding="98px 64px"
						background="--color-light"
						flex-direction="column"
					/>
					<Text
						as="h4"
						margin="12px 0"
						font="--base"
						color="--grey"
						letter-spacing="1px"
						text-transform="uppercase"
					>
						About Zanzibar
					</Text>
					<Text as="h2" margin="12px 0" font="--headline2" md-font="--headline3">
						This is one of the world's greatest cultural crossroads where Africa meets the Indian Ocean.
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Stack>
						<StackItem width="100%" lg-width="33.3%" md-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1575999080555-3f7a698dd8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80) center/cover" />
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1577315734214-4b3dec92d9ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80) center/cover" />
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1575999502951-4ab25b5ca889?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80) center/cover" />
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
			<Button font="--lead" margin="20px">
				Button
			</Button>
		</Section>
		<Components.Fdfdgl />
		<Section />
		<Box width="500px" height="500px" background="#1c3785" />
		<Box width="500px" height="500px" background="#1c3785" />
		<Components.Boxses />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});