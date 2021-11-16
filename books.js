// Book
function newBook() {

  var book = randomBook[Math.floor(Math.random()*randomBook.length)];
  document.getElementById("bookDisplay").innerHTML =
      '<h3>' + book.title + '</h3>' +
      '<img src="'+ book.img +'" />' +
      '<p>' + book.text + '</p>';
}

  var randomBook = [
    {
      title: '"Cleanness," by Garth Greenwell',
      img: "https://images-na.ssl-images-amazon.com/images/I/91NyLLCHPXL.jpg",
      text: "The casual grandeur of Garth Greenwell’s prose, unfurling in page-long paragraphs and elegantly garrulous sentences, tempts the vulnerable reader into danger zones: traumatic memories, extreme sexual scenarios, states of paralyzing heartbreak and loss. In the case of “Cleanness,” Greenwell’s third work of fiction, I initially curled up with the book, savoring the sensuous richness of the writing, and then I found myself sweating a little, uncomfortably invested in the rawness of the scene. The cause was a story titled “Gospodar,” in which the narrator, an American teacher living in Bulgaria, hooks up with a man who begins by play-acting violence and then veers toward the real thing. The transition from fantasy to horror is accomplished with the deftness of a literary magician, and Greenwell repeats the feat even more unnervingly in a later story, “The Little Saint,” in which his likable narrator takes the role of the aggressor rather than the victim. These stories are masterpieces of radical eroticism, but they wouldn’t have the same impact if they didn’t appear in a gorgeously varied narrative fabric, amid scenes of more wholesome love, finely sketched vistas of political unrest, haunting evocations of a damaged childhood, and moments of mundane rapture. Tenderness, violence, animosity, and compassion are the outer edges of what feels like a total map of the human condition. —Alex Ross "
    },

    {
    title: '“Stranger Faces,” by Namwali Serpell',
    img: "https://m.media-amazon.com/images/I/31S4ZWYz97L.jpg",
    text: "In an age of totalizing theories, it’s nice to watch someone expertly pull a single idea through a needle’s eye. “Stranger Faces,” by Namwali Serpell, is one such exercise. The book’s catalytic inquiry—“what counts as a face and why?”—means to undermine the face, the way its expressive capabilities give it the cast of truth. We seek meaning in a shallow arrangement of eyes, nose, cheeks, and mouth, despite how often faces lie, or how often they cloak the world-ordering phenomena of race, gender, and class. Rather than depress or shame readers with these facts, Serpell delights in them. Unencumbered by truth, the face becomes interesting, motile—a work of art. (“Unruly faces” are especially intriguing, according to Serpell, because they invite viewers to sever ties with the placidity of an ideal.) Serpell, a Harvard professor and critic capable of close-reading people just as well as novels or films, includes a dancing range of examples. Her first essay considers the moniker given to Joseph Merrick, the Elephant Man, whose features aren’t, in fact, so elephantine; another essay, on Werner Herzog’s “Grizzly Man,” becomes a study of Keanu Reeves’s himbo appeal. Serpell can reanimate any subject, be it Hitchcock or emojis, and her bright, brainy collection is a model for how to surface the fun in a critical question. —Lauren Michele Jackson "
    },

    {
    title: '“Want,” by Lynn Steger Strong',
    img: "https://images-na.ssl-images-amazon.com/images/I/81htIxYretL.jpg",
    text: "New York novels are as various as the city they describe. But “Want,” a subtly glorious new entry in the genre by Lynn Steger Strong, is set in a town whose qualities—unaffordable, unrelenting, unquittable—many readers will recognize. The book’s narrator is a writer who lives with her husband and two young daughters in a cramped Brooklyn apartment; to keep them in it, she teaches at a charter school by day and in an M.F.A. writing program by evening, though her half-hearted hustling doesn’t stop the family from capsizing into bankruptcy. (The husband quit a job in finance to become an artisanal carpenter, a phrase that would fit nicely on a Green-Wood Cemetery tombstone.) The virtue of this life is its being defiantly chosen. To counteract the claustrophobic privacy of subway commutes, and the slights of rubbing up against the city’s rich and oblivious, we get sticky memories of Florida, where the narrator grew up in a repressive, bourgeois household. There, her closest friend was Sasha, a beautiful, daring girl a year older, whose fate has been uncomfortably linked with hers ever since. Strong uses the friendship as a tether, returning to it to mark time’s passing; her technique is so sophisticated that the murk of the present and the sharply remembered past hold seamlessly together. Her biggest triumph is the transmission of consciousness. I loved the tense pleasure of staying pressed close to her narrator’s mind, with its beguiling lucidity of thought and rawness of feeling. There is much anxiety and ache to be found here—but also, when it is most needed, radiance, humor, love, and joy. —Alexandra Schwartz "
    },

    {
    title: '“On Anger,” edited by Agnes Callard',
    img: "https://images-na.ssl-images-amazon.com/images/I/31bvJFQB77L._SX331_BO1,204,203,200_.jpg",
    text: "Unless you’re dealing with a hard-line Stoic, most philosophers tend to consider anger a morally justifiable response to being wronged—though too much anger, for too long, they might say, could start to hurt you or your community. In the explosive essay that kicks off this anthology, the philosopher Agnes Callard writes that such caveats defang the very point of anger. If anger is a valid response to being wronged, she argues, and if none of the ways we hold people accountable for wronging us—apologies, restitution, etc.—actually erase the original act, doesn’t it follow that “once you have a reason to be angry, you have a reason to be angry forever”? Cue the clamor of a dozen-plus philosophers debating the cause, function, and value of our most jagged emotion. There’s Myisha Cherry, whose work is always so marvelously elegant, on the irrelevance of virtue to the anger that fuels the anti-racist struggle—an anger she describes as “Lordean rage,” after the poet and writer Audre Lorde. Elsewhere, we get Judith Butler on anger as a medium: “[W]e view rage as an uncontrollable impulse that needs to come out in unmediated forms. But people craft rage, they cultivate rage, and not just as individuals. Communities craft their rage. Artists craft rage all the time.” I’m resistant to the idea that moral philosophy is just self-help dressed in tweed, but as this year lurched from one outrage to the next, and as I found myself becoming hoarse (metaphorically, but often literally) from what felt like shouting into a void, this collection became something of a workbook: a tool for parsing the more unwieldy parts of myself, and my loved ones, and the world. —Helen Rosner"
    },

    {
    title: '“Mexican Gothic,” by Silvia Moreno-Garcia',
    img: "https://m.media-amazon.com/images/I/51wPZT9-TJS.jpg",
    text: "In the fall, I cracked open Silvia Moreno-Garcia’s “Mexican Gothic” in the bath and found myself reading until the water turned cold. “Mexican Gothic” is Moreno-Garcia’s sixth novel but the first to break through as a major hit. (It has already been optioned for television.) This is a function both of its timing and of its addictive prose, which is as easy to slurp down as a poisoned cordial. The book follows a glamorous young socialite with champagne taste named Noemí Taboada, who lives in Mexico City, in the nineteen-fifties, when women were not yet able to vote. Noemí intends to study at university, but her father has other plans: he wants her to check up on a distant cousin, Catalina, who’s living in a crumbling manse with a British man, in a small village, called El Triunfo, where the family operates a silver mine. Catalina has written a distressing note claiming that the house is suffocating her; the family assumes that she’s hysterical, but Noemí is meant to investigate the situation. What she finds is more shocking than she ever expected—the house is an entropic catastrophe, where something sinister (that I won’t spoil here) is literally growing under the baseboards. What makes “Mexican Gothic” so fresh is not only its cramped, crawly ambience—comparisons to “Jane Eyre” are not too generous—but also the fact that it’s steeped in a deep colonial history that haunts the narrative. Is the house in El Triunfo really sick? Or is it just tainted by colonizers who want to strip the land down to its bones? Moreno-Garcia deftly raises these questions and then brings them all together in a gory, monstrous, and utterly satisfying twist. —Rachel Syme"
    },

    {
    title: '“Blindness,” by José Saramago',
    img: "https://images-na.ssl-images-amazon.com/images/I/51M71KeTYyL.jpg",
    text: "José Saramago’s “Blindness” came by mail, last winter, one month after covid came to the U.S. It arrived in a box, with a half-dozen other books, including Camus’s “The Plague” and Defoe’s “Journal of a Plague Year,” about the literature of infection, for an assignment. I read the Saramago in a cabin in the woods, a sugarhouse, while tending a fire, boiling sap. I’d get lost in the story of a plague of blindness and then put the book down to throw another log in the fire. The pages of the paperback got hot in my hands. I started to sweat, reading about the blindness that fell upon everyone, so that they could see only white, and then I’d stare into the flames and at the sap, bubbling, and the steam, rising, a cloud of white. I took one last trip after that, to Rutgers, the first week of March. I remember being worried about the virus on the train, wearing winter gloves and a scarf, thinking I should have cancelled. I gave a lecture and went out to dinner with a dozen people, professors of English and history. We sat at a long table by a fire, a last supper, and I happened to ask if anyone had ever read “Blindness,” and, weirdly, everyone had. So we went around the table, sacramentally, talking about our favorite lines, characters, moments: the doctor’s wife, the story of the dog, how the infected escape, blindly, from the lunatic asylum where they’ve been quarantined, and the part where they find soap and, finally, wash themselves, naked, on a balcony, with buckets of rainwater. And then, it was all over. —Jill Lepore"
    },

    {
    title: '“Children of Ash and Elm: A History of the Vikings,” by Neil Price',
    img: "https://images-na.ssl-images-amazon.com/images/I/815Z8K57dWS.jpg",
    text: "Reading the archeologist Neil Price’s beguiling book feels a little like time travel—and who, in 2020, didn’t feel tempted to drop into another epoch? Price achieves this feat with an accumulation of sensory detail, along with a grounded but game approach to conjuring the inner worlds of people whose cosmology, for starters, is utterly different from our own. (As he writes, we’ll never really know what it might have felt like “if you truly believed—in fact, knew—that the man living up the valley could turn into a wolf under certain circumstances.”) Not the least of Price’s achievement is to rescue Viking history from the grasp of white supremacists who claim a specious lineage with it. He does so not by asserting any sort of moral superiority for the Vikings—theirs was a brutal society that practiced human sacrifice and slavery, as Price makes abundantly clear—but by restoring their rich and strange particularity. As seafarers who travelled and traded widely, Vikings were, almost by definition, multiethnic. “There was never any such thing as a ‘pure Nordic’ bloodline, and the people of the time would have been baffled by the very notion,” Price writes. The book is full of such insights, but what has stuck with me are Price’s descriptions of a world enamored with beauty. Surfaces, including those of the body, were intricately decorated, tendrilled over with runic inscriptions and tiny pictures. (Vikings do not seem to have been the unkempt beasts of pop culture legend—the archeological record is heavy on, of all things, combs.) I’ll long remember Price’s evocation of the wafer-thin squares of gold, stamped with images of otherworldly beings, that adorned the great halls where visitors drank and fought and recited poetry. Firelight would have animated those static images. Price has done something similar here. —Margaret Talbot"
    },

    {
    title: '“Rodham,” by Curtis Sittenfeld',
    img: "https://images1.penguinrandomhouse.com/cover/9780399590917",
    text: "I have always been amazed by the novelist Curtis Sittenfeld’s talent for selecting people who we think we already know and convincing us that they are far more complicated and interesting than we ever dreamed. Before I read “American Wife,” I had a basic smug liberal contempt for Laura Bush, who I perceived as her husband’s mute appendage. But in Sittenfeld’s telling, the former first lady—or someone quite like her—was a shy but sharp bibliophile with seething guilt and compelling self-doubt. Now I kind of love her. Similarly, a Republican friend told me that reading Sittenfeld’s latest, “Rodham,” caused her to question everything she’d believed about Hillary Rodham Clinton. We were both riveted by Sittenfeld’s brave, passionate, and diligent heroine navigating lust, ambition, Arkansas, the Ivy League, and, of course, Washington. Sittenfeld’s writing is so fine, her characters so vivid, her empathy so profound that she manages to absorb the reader on a level that transcends partisanship. In 2020, that was a remarkable achievement and an enormous gift to her readers. —Ariel Levy"
    },

    {
    title: '“The Art of Doing Science and Engineering: Learning to Learn,” by Richard Hamming',
    img: "https://images-na.ssl-images-amazon.com/images/I/61Qg6M7uV9L.jpg",
    text: "Richard W. Hamming was a mathematician by training, but he cut his teeth as a researcher working at Los Alamos, programming the I.B.M. computers that physicists used to solve equations as they worked on the atomic bomb. After the war, he joined Bell Telephone Laboratories, where he remained for thirty years. This was when big corporations such as I.B.M. and Bell led the charge of technological innovation, and Hamming’s fingerprints were all over the period’s advances. He invented so-called Hamming codes, now basic to digital processing, and co-created an early programming language, L2. After retiring, he taught at the Naval Postgraduate School, in California, giving courses in not just how to do things but how to think like a scientist and conduct a fruitful creative career. (He called it “style.”) In the mid-nineties, a few years before his death, Hamming turned his lecture notes into a book, “The Art of Doing Science and Engineering: Learning to Learn,” which has been republished by Stripe Press—a young publishing house, created by the eponymous payment-software company, that brings out interesting left-brained books in beautiful, right-brain-friendly editions. Parts of “The Art” get technical enough to include equations, but Hamming is interested mostly in the big picture, and his subjects range from the limits of mathematics (and of language) to the slipperiness of data (“You cannot gather a really large amount of data accurately. It is a known fact which is constantly ignored”). “The Art” would be a great gift for a young scientist-to-be, yet I also loved it as someone on the fuzzy side of things, who always enjoyed science but lost daily touch with it when I left school. His chapter on “creativity,” which draws not just from his field but from history and art, is both stirring and humane. “My duty as a professor is to increase the probability that you will be a significant contributor to our society,” he writes. He was one of the last geniuses who believed in innovation as a shared public project, and, when he imagined the future for which he was preparing students, he looked to the year 2020. He’d be pleased to find his lessons are still urgent here today. —Nathan Heller"
    },

    {
    title: '“Balzac’s Lives,” by Peter Brooks',
    img: "https://images-na.ssl-images-amazon.com/images/I/81tQrawfHKL.jpg",
    text: "Honoré de Balzac’s “La Comédie Humaine,” grand in both ambition and scope, comprises approximately ninety titles, over whose course the occasionally intersecting stories of nearly two thousand five hundred characters form a portrait of France in the first half of the nineteenth century. In “Balzac’s Lives,” Peter Brooks—a professor emeritus of comparative literature at Yale—turns to nine of these characters to explore the author’s writerly obsessions with money and power, love and desire. To treat fictional characters as so-called real people, with their own lives and behavioral patterns, Brooks notes, has been considered a naïve, even gauche critical approach—at least since the time of the Russian Formalists, who encouraged us to analyze characters for their function as literary devices, rather than for their adherence to the rules that might govern flesh-and-blood individuals. But for Brooks, Balzac’s energetic, almost fevered attitude toward his characters—evident in their emergence and reëmergence over the course of many books, and in their dizzyingly varied social backgrounds, from courtesan to banker, baron to pauper—demands a closer critical look. As I read the book, I enjoyed Brooks’s sharp insights, which suggest the ways in which Balzac’s proto-modern world is not so different from our own. But I also felt a more basic, visceral pleasure. Though I consider myself a Balzac fan, I’ve read only a fraction of the author’s works, and so to be able to discover—or, in some cases, recall—what fates befall certain characters reminded me of the not unprimitive joy of tearing into a juicy morsel of gossip. In this case, it’s the kind that sends you on a mission to find out more—which means picking up a Balzac novel. —Naomi Fry"
    },

    {
    title: '“The Year of the French,” by Thomas Flanagan',
    img: "https://m.media-amazon.com/images/I/51BZ+e4nG6L._AC_SY780_.jpg",
    text: "I’m not a recreational reader. I need a reason—usually, it’s something I’m writing—to read a book. But the semi-lockdown last spring seemed to me, as it did to many people, a reason to read a book for no reason, other than pleasure or distraction. So I pulled one off the shelf: “The Year of the French,” by Thomas Flanagan. The novel, published in 1979, is about the invasion of Ireland by the French in 1798. France was revolutionary France, and Ireland was effectively a colony of Britain. The French were hoping to combine forces with an Irish insurrection and liberate the island in the name of liberté, fraternité, and égalité. It didn’t quite work out. I was lucky that I knew nothing about this invasion, not even that it had happened, because Flanagan’s method is to plunge the reader into a strange, wild, poetic, cruel, and finally hopeless world of Irish peasants, absentee British landlords, revolutionary terrorists, and men and women trying to hold on to what they have in a universe threatening to turn upside down. You have to make your own way through this landscape, so the stranger everything is for you, the more adventurous the experience. The story Flanagan tells makes our own dark times seem eminently manageable. I wanted to be taken somewhere else by a book, and I was. And there: I’ve written about it, too! —Louis Menand"
    },

    {
    title: '“So Long, See You Tomorrow,” by William Maxwell',
    img: "https://images-na.ssl-images-amazon.com/images/I/71oLYAxj-ZL.jpg",
    text: "During these long months of hiding out at home—of being thrown back upon recollections of the past, in place of new experience—I’ve been thinking about how to make literary use of memory. How might one capture the way that images or encounters lodge in the imagination and become, over time, layered with meaning? The title of William Maxwell’s short, stunning novel, “So Long, See You Tomorrow,” is a phrase that is said lightly but that comes to be freighted with tragedy; the book itself, which was published in 1980 after being serialized in The New Yorker, is a virtuosic blend of memoir and fiction. Maxwell, who was a fiction editor at this magazine for some four decades, and who died in 2000 at the age of ninety-one, drew in this book, as in a number of others, upon recollections of his hometown of Lincoln, Illinois. In part, it is a true-crime narrative: a jealous husband murders his wife’s lover, who is also his best friend. But the book is also about how that crime stays alive in the narrator’s memory, and how it becomes a means for him to explore his own experience of loss and of guilt. This is a book filled with passages that I wanted to transcribe in a hedge against the failings of my own memory, among them this pronouncement, about midway through: “If any part of the following mixture of truth and fiction strikes the reader as unconvincing, he has my permission to disregard it. I would be content to stick to the facts if there were any.” As well as encountering Maxwell on the page, I recommend listening to the audiobook, which was recorded in 1995. It’s beautifully read by the author, whose voice a listener can hear cracking with emotion upon reaching the novel’s final, breathtaking sentence. —Rebecca Mead"
    },

    {
    title: '“Corregidora,” by Gayl Jones',
    img: "https://images.penguinrandomhouse.com/cover/9780807061091",
    text: "When Toni Morrison first read the manuscript for what would become Gayl Jones’s début novel, “Corregidora,” she immediately heralded it as a turning point for fiction. “No novel about any black woman could ever be the same after this,” Morrison, then an editor at Random House, wrote. “Corregidora” was published in 1975. Set primarily in the late nineteen-forties, the novel follows Ursa Corregidora, a twenty-five-year-old Black blues singer from Bracktown, Kentucky. Ursa navigates tumultuous, occasionally violent relationships and works to carve out a place for herself as an artist. Following an unwanted hysterectomy, she also confronts her ancestors’ entreaty to “make generations,” which is key to continuing an oral tradition that can preserve, undiluted, the realities of slavery. (Her family carries the name of the Portuguese slave owner who fathered both Ursa’s mother and grandmother.) Storytelling, in this mode, becomes an intergenerational act—a way of maintaining evidence of violence, incest, and erasure. Jones’s writing resists self-conscious ornamentation in favor of casual, knowing vernacular, and her structure is unconventional but tightly controlled. Dialogue is often interrupted by memory or fantasy, and time turns in on itself. On a visit to Bracktown, Ursa’s mother offers an elliptical, bracing account of her own mother’s sexual abuse by Corregidora; later in the novel, which closes in the late nineteen-sixties, Ursa moves closer to reconciling with what has gone unsaid. And yet, despite this panorama, the novel’s actual spaces are intimate—relationships play out in bedrooms, kitchens, bars. Jones’s great achievement is to reckon with both history and interiority, and to collapse the boundary between them. —Anna Wiener"
    },

    {
    title: '“Something New Under the Sun: An Environmental History of the Twentieth-Century World,” by J. R. McNeill',
    img: "https://images-na.ssl-images-amazon.com/images/I/51eBzPt6bmL.jpg",
    text: "J. R. McNeill’s “Something New Under the Sun: An Environmental History of the Twentieth-Century World” came out in 2000, but it’s just as relevant now as it was when it first appeared. It’s one of those rare books that’s both sweeping and specific, scholarly and readable. McNeill looks at how humans have, over the past hundred years, altered the atmosphere, the biosphere, and what he calls the “hydrosphere.” What makes the book stand out is its wealth of historical detail. The changes we have wrought, McNeill argues, have mostly been the unintentional side effects of economic growth. They’ve ushered in “a regime of perpetual ecological disturbance,” which will strain many species’ ability to adapt. How people will deal with this new “regime” will determine what the world looks like not just a century from now but for millennia. —Elizabeth Kolbert"
    },

    {
    title: '“The Known World,” by Edward P. Jones',
    img: "https://images-na.ssl-images-amazon.com/images/I/51p1ASH+6+L.jpg",
    text: "My reading life in 2020 was mostly distinguished by how hard it was for me to read. But my skittering stopped sometime this spring, when I opened “The Known World,” Edward P. Jones’s Pulitzer Prize-winning novel, from 2003. Reading it was like dropping anchor. My brain stabilized, and it felt like the only thing I could do, for a change, was focus in. This was the work of a genius. The clarity of Jones’s lines, the beauty of his descriptions, the mesmerizing character sketches: all of them were a function of the extreme specificity and intricacy of the world he had created. In a way, he’s a kind of cartographer. The book’s title is a reference to a map: “a browned and yellowed woodcut of some eight feet by six feet” that hangs behind the desk of a sheriff in antebellum Virginia. The seller of the woodcut—a Russian “with a white beard down to his stomach”—claimed it was the first time the word “America” had appeared on a map. The novel, which tells the story of a Black slave owner and his family, is also an account of territory—that marked out by the institution of slavery, which extends into the brains, bones, and souls of everyone it touches. After reading, I immediately picked up Jones’s other two books, both story collections, and raced through the more recent one, “All Aunt Hagar’s Children.” I didn’t think it was possible for me to like a book as much as “The Known World,” but I began to think that I liked these stories even more. Now, the other collection, “Lost in the City,” is on my bedside table—a down payment on my next escape. —Jonathan Blitzer"
    },

    {
    title: '“Mostly Dead Things,” by Kristen Arnett',
    img: "https://media.newyorker.com/photos/5ddef4af12584900080978f2/master/w_1600,c_limit/MostlyDeadThings.jpg",
    text: "This début novel follows a taxidermist, Jessa-Lynn, who lives in central Florida and is mourning the death of her father. Jessa-Lynn’s lover, who is also her brother’s wife, has run off. Her mother is taking apart her father’s specimens—he, too, was a taxidermist—and turning them into erotic art installations. Black humor meets lush prose; Arnett’s Florida—a world of sensuousness and danger—expresses the freedom that her characters seek, as taxidermy itself becomes a figure for queerness, sex, art, and loss."
    },

    {
    title: ' “The Divers&#39; Game,” by Jesse Ball',
    img: "https://images-na.ssl-images-amazon.com/images/I/71cADlSWMqL.jpg",
    text: "This dystopic fable imagines a society riven in two, with the upper class empowered to murder members of the lower class, for any reason. Characters are given varying degrees of self-awareness; spare, simple language evokes innocence maintained at too high a price."
    },

    {
    title: ' “Trust Exercise,” by Susan Choi',
    img: "https://images-na.ssl-images-amazon.com/images/I/71iRq6hzHpL.jpg",
    text: "Sarah and David, teen-agers at a prestigious performing-arts high school, conduct their love affair under the watch of a manipulative and charismatic drama teacher. The students are all sweat, hormones, and painful self-consciousness. The novel, tense and lovely as a dancer’s clenched muscle, explodes into a mid-act twist, which brilliantly foregrounds questions of authorship and appropriation."
    },

    {
    title: '“Ducks, Newburyport,” by Lucy Ellmann',
    img: "https://images-na.ssl-images-amazon.com/images/I/51BYf+JO1KL.jpg",
    text: "This stream-of-consciousness novel, most of which unspools over a single sentence, is an inquiry into how we live—and think—now: drowning in information, aghast at the news, yet captive to the mundane details of work and family. Ellmann’s unnamed protagonist, a middle-aged housewife in Ohio, is at once conventional and specific, not to mention funny. Her litany of fears and yearnings acquires an almost sacral quality."
    },

    {
    title: '“Girl, Woman, Other,” by Bernardine Evaristo',
    img: "https://media.newyorker.com/photos/5ddef8248b10940009804f4c/master/w_1600,c_limit/GirlWomanOther.jpg",
    text: "Evaristo’s eighth novel, which shared this year’s Booker Prize with “The Testaments,” by Margaret Atwood, creates a symphony of black womanhood. Each chapter centers on a different character—a feminist playwright, her goth-alien daughter, the “separatist lesbian housebuilder” dating her friend—and their connections emerge gradually. At different times, Evaristo’s tone is either ringing or confiding, amused or stricken. Her language spills over the page in free verse that suggests Ntozake Shange but lays down its own rhythms."
    },

    {
    title: '“How We Fight For Our Lives,” by Saeed Jones',
    img: "https://images-na.ssl-images-amazon.com/images/I/71Ll47Qi-XL.jpg",
    text: "Jones’s tale of coming of age in the South as a black, gay poet has a startling immediacy. He writes of college lovers, the threat of hate crimes, and his self-possessed mother, who supported him but struggled to talk about his sexuality. The book, which is slim and focussed, quakes with a nervous energy that often erupts into euphoria."
    },

    {
    title: '“In The Dream House,” by Carmen Maria Machado',
    img: "https://media.newyorker.com/photos/5ddef879996e66000803bb4c/master/w_1600,c_limit/InTheDreamHouse.jpg",
    text: "This memoir, which tells the story of Machado’s abusive relationship with another woman, is an act of personal and formal bravery: a narrative refracted through multiple genres—“Dream House as Creature Feature,” “Dream House as Word Problem”—that explores vulnerability but vibrates with power. Machado heightens a sense of dislocation by seeming to practice literary criticism on herself. (Right before her prologue, she writes, “I never read prologues. . . . If what the author has to say is so important, why relegate it to the paratext? What are they trying to hide?”)"
    },

    {
    title: '“Valerie,” by Sara Stridsberg',
    img: "https://images-na.ssl-images-amazon.com/images/I/81cgUDQO0vL.jpg",
    text: "In this whirling, poetic mashup of a novel, Stridsberg takes liberties adapting scenes from the biography of Valerie Solanas, the feminist who shot Andy Warhol. (Behold Valerie, languishing on her deathbed, sparring with the book’s narrator, who was not there.) The emotional through line is Stridsberg’s longing to know her mysterious, self-contradictory subject."
    },

    {
    title: '“Axiomatic,” by Maria Tumarkin',
    img: "https://images-na.ssl-images-amazon.com/images/I/71I-2ph8fjL.jpg",
    text: "The book is comprised of restless, gorgeous essays, each of which uses an aphorism—“time heals all wounds,” “you can’t enter the same river twice”—to reflect on Tumarkin’s preoccupations: trauma, the ongoingness of the past, and the unworkability of language. Tumarkin takes up subjects like youth suicide and the plight of homeless people in North Melbourne, but her approach is never maudlin. The book exudes pity, as it’s classically defined— “a sorrowing compassion.”"
    },

    {
    title: '“On Earth We&#39;re Briefly Gorgeous,” by Ocean Vuong',
    img: "https://media.newyorker.com/photos/5ddef5332ebfed0009e309fb/master/w_1600,c_limit/OnEarthWereBrieflyGorgeous.jpg",
    text: "Vuong, a poet and Vietnamese immigrant, studies his upbringing through the lens of his mother, to whom the novel is addressed. This woman, Rose, is both loving and abusive. She cannot read English, and yet her imagined readership is the occasion for the story’s telling. Rose becomes, for her son, a horizon where intimacy and loneliness converge; the grace of the book is to measure distance while acknowledging that few distances are fixed."
    },

    {
    title: '“Asymmetry,” by Lisa Halliday',
    img: "https://media.newyorker.com/photos/5c057a4804d74a2d12344eb2/master/w_1600,c_limit/waldman-books08.jpg",
    text: "Halliday’s début arrived in February, dangling bait: a roman à clef starring an aging and unchaste Philip Roth. That’s the first half of the novel. In the second half, Amar, a Muslim-American economist, is detained at Heathrow Airport. A slim valedictory coda binds the two sections together. The complementary stories ping images off each other as Halliday raises volatile questions about imagination and its blind spots, about power, about the love of work and the work of love. Her book is a pleasure rush with a long half-life."
    },

    {
    title: '“Confessions of the Fox,” by Jordy Rosenberg',
    img: "https://images-na.ssl-images-amazon.com/images/I/91GuuiWYqsL.jpg",
    text: "Rosenberg envisions the infamous British thief Jack Sheppard (of Brecht’s “Threepenny Opera”) as a transgender man. A put-upon professor, also trans, discovers Sheppard’s memoirs and adds his own annotations, which are alternately risqué, cerebral, and poignant. The fates of the two characters converge as the manuscript draws the malevolent interest of an academic corporation with a lust for surveillance. “Confessions” recasts the white supporting players of Sheppardania as nonwhite and queer, and it demands that the full and mysterious humanity of all people be recognized, but the book is not didactic. By the time you think you’ve caught up to it, it’s already gone: a political proof vanishing into the trees."
    },

    {
    title: '“Ordinary People,” by Diana Evans',
    img: "https://images-na.ssl-images-amazon.com/images/I/71X+RhVL82L.jpg",
    text: "Evans’s third novel, a domestic tragicomedy, centers on two couples: one has merely lost its spark, and the other has drifted into the living death of suburbia. The book achieves a moody, velvety atmosphere, as though events were unfolding under amber-tinted bulbs. Bracketed by Barack Obama’s electoral victory and Michael Jackson’s overdose, “Ordinary People” also offers a precise sketch of the British black middle class, with a daring fifth-act twist."
    },

    {
    title: '“Small Fry,” by Lisa Brennan-Jobs',
    img: "https://images-na.ssl-images-amazon.com/images/I/81liycPGOtL.jpg",
    text: "This memoir, by the daughter of Steve Jobs, is sensitively written and crammed with spicy first-look anecdotes about the Apple co-founder and his family. But what renders “Small Fry” compulsively readable also makes it disturbing. The book often seems to slip from its author’s grasp, eviscerating Jobs and his wife and then apologizing, or denying any intent to criticize, or trying to short-circuit the reader’s judgment of Jobs via appeals to his inexpressible charisma. The memoir does not so much describe the child’s tumult of love and anger as manifest it, making for raw and riveting reading."
    },

    {
    title: '“Convenience Store Woman,” by Sayaka Murata',
    img: "https://media.newyorker.com/photos/5c057b69e747942cda7c2c35/master/w_1600,c_limit/waldman-books02.jpg",
    text: "Keiko sells rice balls and other conveniences at the Hiiromachi Station Smile Mart, a zone of orderly shelves, fluorescent lights, and controlled temperatures. She loves her work, but her sister worries: Why won’t she settle down, find a boyfriend? Wouldn’t she rather be human and troubled than post-human and happy? In flat, uncanny-valley prose, Murata enacts a celebration of nonconformity that is both joyous and unsettling."
    },

    {
    title: '“Florida,” by Lauren Groff',
    img: "https://images-na.ssl-images-amazon.com/images/I/A1ZlYXIWe-L.jpg",
    text: "A finalist for the National Book Award for Fiction, this collection of short stories turns Florida into a place half-real and half-phantasmagorical—a psychic repository of beauty and danger. Women drink wine and hit their heads and may or may not become panthers. Children go feral and hide from hooting adults. Everywhere, Groff’s distinctive prose style tugs at the surfaces of things, revealing the alienness underneath."
    },

    {
    title: '“Kudos,” by Rachel Cusk',
    img: "https://prodimage.images-bn.com/pimages/9781250207395_p0_v2_s550x406.jpg",
    text: "The final book in Cusk’s spare trilogy pours out flights of eloquent, self-damning consciousness. As with “Outline” and “Transit,” “Kudos” is concerned with what fresh shapes a novel might take and whether traditional devices—plot, character, dialogue—have worn out their welcome."
    },

    {
    title: '“Freshwater,” by Akwaeke Emezi',
    img: "https://media.newyorker.com/photos/5c057bc5e6e9b82d59fdfe6b/master/w_1600,c_limit/waldman-books00.jpg",
    text: "This slender début novel forms one of the twistier branches on the autofiction tree. Ada, a Nigerian girl who moves to Virginia, sees herself as an ogbanje—an Igbo spirit that often takes plural guises—born into a human body. (The Nigerian-born Emezi also identifies as an ogbanje.) The protagonist’s head swirls with alternative personalities—a cruel and impulsive charmer, a Christ-like observer, an androgynous poet—and “Freshwater” invites readers not to dismiss their own internal contradictions but instead to think about the multiplicity of the self."
    },

    {
    title: '“Immigrant, Montana,” by Amitava Kumar',
    img: "https://images-na.ssl-images-amazon.com/images/I/71RFgz4AFfL.jpg",
    text: "This is a discovery of country through the discovery of that country’s women. But Kumar’s “nonfiction novel,” about an Indian student who comes to the United States to study literature, is tentative, funny, and self-critical—it inverts and skewers the colonial narrative. Kailash meets Jennifer at his university bookstore and Nina in his film class, and, with his older self narrating each initial intoxication, the novel emulates the digressive turnings of W. G. Sebald or Teju Cole, adding a gentle heat that is all its own."
    },

  ]
