***introduction***
  - first thing link demo repo for those that want to code along
  - my name
  - my Alchemy journey
  - a little pre-Alchemy context
  - what we will do
    - light version of trek-dex
      - https://trekdex.netlify.app/

***give command for starting a create-react-app ts project & links to repo and API***  
- npx create-react-app my-app-name --template typescript

- git repo link for bootstrap

- trex-dex-api-link

***talk a little about TS and how it relates to React***

  - why TS?
    - typing can really help on bigger projects
      - more errors for debugging
      - better than prop-types
    - has led me to a deeper understanding of JS
  - why create-react-app?
    - no fuss
    - ts config/webpack setup already
    - dont have to worry about tsc:watch it just works
  - some unique react-specific things
  - sometimes you might get errors like 'try npm i --save-dev @types/react-router'

***step by step***
- full builds
  - CharacterItem
  - getCharacters
  - useCharacters

- prebuit
  - CharacterList

- full
  - getCharacterById
  - useSingleCharacter

- pre
  - CharacterDetail
    - type React.FC
    - demo moving line 13 to before line 11

- full
  - getCharactersByName
  
- pre
  - CharacterByName
    - React.FC
    - type useState hooks
    - type e on handleChange and handleSubmit
