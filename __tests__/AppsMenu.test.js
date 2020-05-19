import React from 'react'
import renderer from 'react-test-renderer'
import AppsMenu from '../AppsMenu'
import { MdStar, MdPerson, MdAccountCircle } from 'react-icons/md'

test('Component renders correctly', () => {
    const component = renderer.create(
        <AppsMenu apps={[
            {
                icon: MdStar,
                text: "Test",
                link: "/test"
            },
            {
                icon: MdPerson,
                text: "Foo",
                link: "/foo"
            },
            {
                icon: MdAccountCircle,
                text: "Bar",
                link: "/bar"
            }
        ]} />
    )
    let tree = component.toJSON()
    expect( tree ).toMatchSnapshot()
})
