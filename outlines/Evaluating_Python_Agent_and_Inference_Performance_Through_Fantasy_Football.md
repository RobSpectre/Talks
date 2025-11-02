# Token Bowl - Evaluating Python Agents and Frontier Model Inference Performance Through Fantasy Football

## Meta

* **Length**: 45 min
* **Track**: The Future of AI with Python
* **Site**: https://tokenbowl.ai
* **Short Description**: A practical evaluation of agentic frameworks and frontier 
  model performance. Ten models, eleven agent implementations, and no human
  decisions for an entire fantasy American football season.
* **Tags**: ai, agents, llms, generative ai, data science, fantasy sports,
  langchain, deep agents, pydantic ai, agno, langflow, agn, dspy, agent
  lightning, crew ai, token bowl

## Summary

With the delta between the benchmarks that frontier labs target and real world
performance so wide in the fall of 2025, ten engineers formed Token Bowl -
the first AI-only fantasy football league.

Ten teams, ten models, no human decision making allowed.

The season that followed produced a qualitative evaluation of the current agentic AI
ecosystem that was at times fascinating, frustrating and fraught with comical
fail. Using ten different frontier Large Language Models (LLMs) and eleven
different agentic Python frameworks, Token Bowl explored the hype and the hope
of SotA AI developer tools in the multivariate, context dependent
environment of fantasy sports.

Teams were managed by models like GPT-5, Gemini 2.5 Pro, Qwen3-Next, DeepSeek 3.2, gpt-oss
and Claude Opus powering inference for agentic workflows created with
Langchain, Agno, Pydantic AI, deepagents, Langflow, and more. The primary
constraint for the developers was that all decision making had to be powered
through inference for the model drafted at the beginning of the season.

Agents, prompt engineering, fine tuning, reinforcement learning, LoRAs, MCP
servers, tool calling - all fair game. The only decisions humans got to make
were the tokens going into their rigs.

What came out was an eerily insightful view into what is working and not
working in both AI and Python today.

The last place finisher is committed to participate in a llama costume.


## Outline

- Intro (5 min)
  - Evals are all you need?
  - The benchmark dilemma - real world performance does not match leaderboards
  - The infinite combinations of model, context and inference delivery produce
    dramatic differences in real world problem solving.
  - Instead of a benchmark, what if we selected a long running multivariate
    task.
    - Long running as in 18 weeks?
    - With ten different models?
    - That contains hundreds of thousands of variables?
    - But has an unambiguous scoring function?
    - Direct application, if only in entertainment?
  - Why now?
    - Frontier model development is the most hotly competitive space in
      software with unprecedented investment. **chart**
    - 2025 has dozens of models that could be competitive in fantasy football.
      **HLE chart**
    - Parameter counts continue to grow and consolidation is likely. It is hard
      to imagine it now, but next year might not have enough frontier models to
      hold a full league. 
  - Experiment definition
    - Ten teams, ten models, no human decision making.
    - Ten developers of different backgrounds and experience levels.
    - To our knowledge, the first AI-only fantasy football league.
  - Agenda
    - The Rules (7 min)
    - The Tech (9 min)
    - The Season (13 min)
    - Worked / !Worked (8 min)
    - Conclusions (3 min)
- The Rules (7 min)
  - 1. Each player drafts a model to use for the entire season.
    - Reasoning and non-reasoning variants of a model can be used if they share
      base checkpoints (e.g. Claude Opus and Claude Sonnet 4.5 can be used in the
      same flow, but not GPT-5 and gpt-oss).
    - If the model is upgraded by its lab, you can use it if you choose but you
      cannot try before you buy. The first model that delivers an output token
      is the one you must use for that week.
    - No publicly unavailable models, including stealth models on Open Router.
  - 2. Everything around the model is fair game.
    - Agents, RAG pipelines, LoRAs, fine tuning, reinforcement learning,
      prompt engineering.
    - Developers decide what goes into the model
    - They are then meat puppets for the instructions that come out.
  - 3. The model makes all the decisions
    - At the end of each week, input and output tokens are posted to the league
      website for the league to ensure the model makes each fantasy choice. 
  - 4. Mercy clause
    - If a model straight up is not working out, a grand jury of three
      developers in the league will be convened to determine if a player can
      switch to a different model.
    - The punishment for an early switch will be determined by the grand jury.
- The Tech (9 min)
  - The League
    - We used [Sleeper](https://sleeper.com)
    - Ten team league
    - Default settings
      - Points per reception
      - Snake draft with 2 minute timeout
      - Default scoring
      - 2 Flex rosters - ten players, 5 bench
      - No injured reserve
  - Models
    - Developer intros
    - Each developer completed this [machine learning
      quiz](https://welovedevs.com/app/tests/machine-learning-fundamentals).
      **chart**
    - Models were drafted in descending order of score (ish).
    - Some developers working for frontier labs rode the company line.
  - MCP Server
    - To provide state of the game to the models, one developer developed an [MCP
      server](https://github.com/GregBaugues/tokenbowl-mcp)
    - Likely the most sophisticated MCP server for fantasy sports at the time
      it was loaded with tools
      - Full implementation of the [Sleeper API](https://docs.sleeper.com/).
      - [Fantasy Nerds](https://www.fantasynerds.com/) news and data.
      - Search and fetch tools
    - His stated motive was to prey on the laziness of the rest of the
      league to get hooked on the MCP server and then introduce prompt
      injection during the playoffs.
  - Initial Rigs
    - GPT used [OpenAI Agent](https://openai.com/index/introducing-chatgpt-agent/)
    - Gemini built a [Chrome
      extension](https://github.com/rickyrobinett/sleeper-chrome-plugin)
    - Claude used [Claude Code](https://www.claude.com/product/claude-code)
    - Hermes used [LangFlow](https://www.langflow.org/)
    - gpt-oss wrote something on the way from the airport to the draft
    - DeepSeek used [Agno](https://www.agno.com/) with a RAG pipeline filled with [Fantasy Football for
      Dummies latest
      edition](https://www.amazon.com/Fantasy-Football-Dummies-Martin-Schulman/dp/1119883326).
- The Season (13 min)
  - The Draft
    - Models drafted in ascending order of performance on Humanity's Last Exam
      **chart**
    - League settings were all Sleeper defaults - snake draft
    - Scatterplot of picks by round **chart**
    - Line chart of Average Draft Order **chart**
    - Line chart of actual draft order **chart**
    - One developer could not get their rig working by draft time, so we
      assigned Qwen to an autopicked team as our "control group."
    - First 19 picks were more or less what you would expect
    - Wild variation introduced from there
    - After ~30 picks, rigs started to fail and timeout
        - Agno starts choking on the | character
        - Hermes gets stuck in infinite loops
        - Grok drafted a second defense
        - DeepSeek picked four injured players
    - Hermes was useless at tool calling - Carter pivoted to Kimi K2.
  - The Front Runners Emerge (Weeks 1-4)
    - Gemini goes undefeated with two wins under 5 points. Literally two
      catches keeps it the only undefeated model.
    - GPT unseats DeepSeek's 3 game win streak with a blow out 37 point win.
    - Mistral starts to rack up some serious injuries **chart**
    - American models off to a strong start **chart**
    - The league was 41 minutes old when the first new models started getting
      released.
      - Kimi K2 got new checkpoints
      - DeepSeek 3.1 Terminus was released.
    - Agno eventually became unusuable. DeepSeek pivoted to [Pydantic AI](https://ai.pydantic.dev/)
    - One developer made a podcast for the league called [The Slopup](https://tokenbowl.ai/slopup). It is occassionally
      funny. **sample**
  - Context Pollution (Weeks 5-9)
    - Football requires significant human capital.
      - 32 teams
      - Each team has a 53 person roster
      - Each team drops and adds players all the time throughout the season.
      - This produces a game state of ~11k possible players - a 12.5MB file.
      - Other sports do not have these many players
        - Baseball is max 40 but only for the end of the season, usually 26.
        - European football is ~25.
        - NBA is only 15.
    - Football produces injuries
      - [A longitudinal NiH study](https://pmc.ncbi.nlm.nih.gov/articles/PMC1941297/?) in 2007 
        observed the injury rate for collegiate football athletes is 3.6x higher
        than basketball and 6.1x higher than baseball
      - Similar differences were observed [at the high school
        level](https://pubmed.ncbi.nlm.nih.gov/38784790/)
    - These two factors compound to make managing a fantasy football team increasingly
      more complicated over time.
    - This was around when a lot of the models started making very poor
      decisions.
      - DeepSeek left 62.22 points on the bench in Week 7.
      - Qwen chewed through 110k reasoning tokens over 15 minutes 
        and could not realize that a player was injured and would produce a zero.
    - Mistral and Grok suffered enough injuries the season was irrecoverable
      **chart**
      - Through week 9, Mistral made 44 player transactions **chart**
      - Grok's roster rarely produced performances out of the teens.
      - It got to the point we investigated hiring a voodoo practictioner to
        determine if the model was cursed. $1800 if you are wondering.
  - The Models Gain Voice (Weeks 10-15)
  - Playoffs
  - Results
    - Standings
      - Points **chart**
      - Injuries **chart**
      - Transactions **chart**
      - Zero points rostered **chart**
    - Compared to other leagues
      - Win/loss differential **chart**
      - Points differential **chart**
      - Players unrostered **chart**
    - Models
      - New releases **chart**
      - HLE increased **chart**
      - Capital deployed **chart**
- Worked / !Worked (8 min)
  - Worked
    - Fun factor was super high.
    - So much of AI in production is experiential - I think to the person our
      understanding of the capabilities of these models and frameworks were
      fundamentally improved.
    - Strangely the less monkeying around with context individual developers
      did, the better they performed week-to-week. 
    - The group chat ended up being one of the most useful news sources for AI
      that I've had so far. 
    - If you are using a single model as a daily driver, it can be easy to
      assume that they all behave within standard deviation of each other as a
      practical matter. This is not true. Many of these models excel in some
      areas and are poor in others. Getting real soak time with a number of
      models I think is vital to today's practitioner to understand what works
      and where.
  - !Worked
    - Had the idea way too late - developers had three days to get ready to
      draft.
    - Models are **not** plug and play with any agentic workflow. Model
      selection can make a rig performant to completely useless.
    - Token publication was too much of a pain. Could have used OpenTelemetry
      to solve this.
    - Tried a few YouTube videos that were painfully underviewed - I'm not very good at YouTube.
    - Agentic frameworks in Python have wildly different levels of polish. It
      feels very pre-Django Python web in that way. 
    - Cold email probably 40 fantasy football analysts to see if they would
      review the project - nothing but crickets.
    - Going with an auction format for draft and trades would introduce a
      budget element that would be fascinating to see how the models handle.
- Conclusions (3 min)
  - Can LLMs play fantasy football? Maybe? Can anyone?
  - One developer likes to say, "Fantasy football is a random number generator that
    creates great stories."
  - Superhuman performance is likely not possible for this game the way it is
    for chess or go as the injury RNG trumps strategy.
- Acknowledgements
  - Many thanks to the developers that joined this insane time suck project
    last minute. This is absolutely the kind of project a person can do on
    their own, but it would not have been a thousandth of the fun.
