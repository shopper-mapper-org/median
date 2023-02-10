# Project Charter

## Purpose & Objective

Deliver the client the proposed Shopper Mapper Application

## Breakdown

- install axios, react-router-dom, react-icons, sass
- set up routes
  - / = main
  - /about, /contact, /popular (stretch goals)
- main > Header, Form, Results, Map, Footer
- Header
  - nav (stretch)
- Form
  - locationInput: string
  - typeInput: string
  - rangeInput: number (default = 10) _stretch goal_
  - touristMode: boolean (default = false) _stretch goal_
  - pass results to Results component and Map component to display
- Results
  - fetch data from API getLocations(inputs)
  - store results in a state array
  - highlight average result using getMiddleLocation(locations) function
  - on result click, getDirections(userLocation, resultLocation)
  - show directions on map using displayDirections() function ?
- Map
  - start up on mount
  - updates using useEffect, linked to highlighted location state
- Footer
  - include 'built by Juno'
  - include github link

## MVP Requirements

- use MapQuest API
- user has the ability to use their current location or input a location
- user can type in a query
- user can see every instance of that query within 10km of their location
- the middle location should be highlighted (two items if even results)
- user can choose a result destination and get directions from the base location to the destination
- error handling: if user types in a query that returns no results
- handle common error responses
- API loading state

## Stretch Goals

- additional pages: ErrorPage, AboutPage, ContactPage
- make range adjustable
- tourist mode, highlighting results with more than one result
- allow users to vote, saving them to firebase
- create a secondary map (PopularPage), populated with most average votes
- add scrollToTop feature

## Deliverables

- project files on github
- project deployed to Netlify
- all requirements completed BEFORE any stretch goals

## Style Guide

- To be discussed with "client"

## Team Communications

- 10am weekday check-ins (unless there is class)
- slack messaging, trello board
- in-person meetings at CSI

## Schedule

- bootcamp hours
- 1 hour breaks
- Sunday off-days
- possible weekend evenings

## Github Commits

- smaller features can be pushed individually
- larger changes require review from other members
- use your discretion
