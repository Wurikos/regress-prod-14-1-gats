import React from "react";
import { useOverrides, Formspree, GoogleMap, Menu, Section, SocialMedia, StackItem, Stack } from "@quarkly/components";
import { Button, Icon, Hr, Image, Input, Link, Text, List, Box } from "@quarkly/widgets";
import { MdFace } from "react-icons/md";
const defaultProps = {};
const overrides = {
	"button": {
		"kind": "Button",
		"props": {
			"children": "Button"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdFace
		}
	},
	"hr": {
		"kind": "Hr",
		"props": {}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "64px",
			"height": "64px"
		}
	},
	"input": {
		"kind": "Input",
		"props": {}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "#",
			"children": "Some text"
		}
	},
	"list": {
		"kind": "List",
		"props": {}
	},
	"text": {
		"kind": "Text",
		"props": {
			"children": "First item"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"children": "Some text"
		}
	},
	"formspree": {
		"kind": "Formspree",
		"props": {
			"errorMessage": "Something went wrong",
			"completeText": "Success"
		}
	},
	"input1": {
		"kind": "Input",
		"props": {
			"name": "email",
			"placeholder": "Email",
			"margin-right": "4px"
		}
	},
	"button1": {
		"kind": "Button",
		"props": {
			"children": "Submit"
		}
	},
	"googleMap": {
		"kind": "GoogleMap",
		"props": {}
	},
	"menu": {
		"kind": "Menu",
		"props": {}
	},
	"section": {
		"kind": "Section",
		"props": {}
	},
	"socialMedia": {
		"kind": "SocialMedia",
		"props": {
			"facebook": "https://www.facebook.com/quarklyapp/",
			"twitter": "https://twitter.com/quarklyapp",
			"youtube": "https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw",
			"vkontakte": "https://vk.com/quarklyapp",
			"telegram": "https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
		}
	},
	"stack": {
		"kind": "Stack",
		"props": {}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"children": <>
				{"            "}First Item{"\n        "}
			</>
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"children": <>
				{"            "}Second Item{"\n        "}
			</>
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"children": "Stack item"
		}
	}
};

const Fdfdgl = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Button {...override("button")} />
		<Icon {...override("icon")} />
		<Hr {...override("hr")} />
		<Image {...override("image")} />
		<Input {...override("input")} />
		<Link {...override("link")} />
		<List {...override("list")}>
			<Text {...override("text")} />
		</List>
		<Text {...override("text1")} />
		<Formspree {...override("formspree")}>
			<Input {...override("input1")} />
			<Button {...override("button1")} />
		</Formspree>
		<GoogleMap {...override("googleMap")} />
		<Menu {...override("menu")} />
		<Section {...override("section")} />
		<SocialMedia {...override("socialMedia")} />
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				{"        "}
				<Text {...override("text2")} />
				{"    "}
			</StackItem>
			{"    "}
			<StackItem {...override("stackItem1")}>
				{"        "}
				<Text {...override("text3")} />
				{"    "}
			</StackItem>
		</Stack>
		<StackItem {...override("stackItem2")}>
			<Text {...override("text4")} />
		</StackItem>
		{children}
	</Box>;
};

Object.assign(Fdfdgl, { ...Box,
	defaultProps,
	overrides
});
export default Fdfdgl;