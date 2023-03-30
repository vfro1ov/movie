import { FunctionComponent } from "react"
import { Content } from "../components/simple/Content/Content"
import  FilmPage  from "../pages/FilmPage"

export const routerConfig = [
	{
		path: '/film',
		exact: true,
		element: FilmPage,
	},
	{
		path: '/',
		element: Content,
	}
]

export interface RouterConfigProps {
	path:string,
	element:FunctionComponent,
}
