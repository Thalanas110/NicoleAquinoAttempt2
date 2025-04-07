import { poems, type Poem, type InsertPoem } from "@shared/schema";

export interface IStorage {
  getAllPoems(): Promise<Poem[]>;
  getPoemById(id: number): Promise<Poem | undefined>;
  createPoem(poem: InsertPoem): Promise<Poem>;
}

export class MemStorage implements IStorage {
  private poems: Map<number, Poem>;
  currentId: number;

  constructor() {
    this.poems = new Map();
    this.currentId = 1;
    
    // Initialize with 12 poems
    this.initializePoems();
  }

  async getAllPoems(): Promise<Poem[]> {
    return Array.from(this.poems.values());
  }

  async getPoemById(id: number): Promise<Poem | undefined> {
    return this.poems.get(id);
  }

  async createPoem(insertPoem: InsertPoem): Promise<Poem> {
    const id = this.currentId++;
    const poem: Poem = { ...insertPoem, id };
    this.poems.set(id, poem);
    return poem;
  }

  private initializePoems() {
    const poemsData: InsertPoem[] = [
      {
        title: "Whispers of Dawn",
        author: "Emily Harrison",
        content: 
`Morning light breaks through the window pane,
Casting shadows of yesterday's dreams.
A new day beckons with gentle refrain,
Nothing is ever quite what it seems.

The dew-kissed grass shimmers in golden rays,
Birds announce their presence with joyful song.
Flowers unfurl in the sun's warm embrace,
Finding their place where they belong.

This moment of peace before the world wakes,
Holds promises of what's yet to come.
Every breath that the slumbering earth takes,
Whispers secrets to those listening some.

In this quiet dawn, I find my solace,
A brief respite from life's endless race.`,
        gradientFrom: "rgba(109, 40, 217, 0.8)",
        gradientTo: "rgba(159, 122, 234, 0.8)",
        publishedDate: "May 2023"
      },
      {
        title: "Autumn Leaves",
        author: "Marcus Chen",
        content: 
`Crimson and gold flutter down,
Dancing with the wind's gentle sigh.
Nature's confetti covers the ground,
As summer's memories slowly die.

Each leaf a story of sun-drenched days,
Now released to join earth's embrace.
The tree stands tall in stoic grace,
Preparing for winter's cold face.

I gather handfuls of these fallen stars,
Their crisp texture crumbling between fingers.
The scent of decay and renewal lingers,
As seasons change without any bars.

In this moment of transition and loss,
I find beauty in what was and what will be.`,
        gradientFrom: "rgba(159, 122, 234, 0.8)",
        gradientTo: "rgba(249, 168, 212, 0.8)",
        publishedDate: "October 2023"
      },
      {
        title: "Ocean's Memory",
        author: "Sophia Williams",
        content: 
`Waves crash against the shore,
Echoing stories of distant lands.
Ancient rhythms at the ocean's core,
Writing messages in the sands.

Salt spray kisses my weathered cheeks,
As I stand at the edge of two worlds.
The sea holds secrets it never speaks,
As its mysteries slowly unfurl.

How many souls have stood as I do now,
Gazing into the infinite blue?
The ocean remembers each solemn vow,
And carries them through and through.

I am but a moment in its timeless dance,
Yet it shares its wisdom with just one glance.`,
        gradientFrom: "rgba(249, 168, 212, 0.8)",
        gradientTo: "rgba(109, 40, 217, 0.8)",
        publishedDate: "July 2023"
      },
      {
        title: "Midnight Thoughts",
        author: "James Rivera",
        content: 
`In the quiet hours when the world sleeps,
My mind wanders through forgotten paths.
Shadows grow longer as night creeps,
Illuminating truths in aftermath.

Clock ticks echo in the darkened room,
Counting moments of solitary peace.
Thoughts bloom in midnight's gentle womb,
Finding expression and release.

Questions without answers float like dust,
In moonlight streaming through the blinds.
Dreams and memories gather rust,
As I sift through the corners of my mind.

This nocturnal clarity feels like a gift,
A secret dialogue with my inner self.`,
        gradientFrom: "rgba(109, 40, 217, 0.7)",
        gradientTo: "rgba(249, 168, 212, 0.7)",
        publishedDate: "June 2023"
      },
      {
        title: "Mountain Song",
        author: "Elena Frost",
        content: 
`Peaks reaching toward heaven,
Ancient and wise, standing guard.
Valleys nestled between like islands,
Their beauty rugged and hard.

Wind howls through craggy passages,
Singing songs as old as time.
Snow caps glisten in sunlight,
Like diamonds worth not a dime.

I scale these mighty sentinels,
My breath forming clouds in the air.
Each step brings clarity of purpose,
Each view removes a layer of care.

The mountain does not judge or question,
It simply exists in stoic grace.
Teaching me to stand tall against storms,
And face life with steady pace.`,
        gradientFrom: "rgba(159, 122, 234, 0.7)",
        gradientTo: "rgba(109, 40, 217, 0.7)",
        publishedDate: "August 2023"
      },
      {
        title: "City Lights",
        author: "Michael Torres",
        content: 
`Neon glows reflected in rain-soaked streets,
A thousand stories unfold beneath.
Urban symphony of discordant beats,
The city never stops to breathe.

Skyscrapers puncture the night sky,
Windows illuminated like stars.
Taxi horns and distant sirens cry,
As strangers pass without memoirs.

In this concrete jungle of dreams and despair,
I find a strange sort of home.
Anonymous faces everywhere,
Yet never truly alone.

The pulse of humanity runs through these veins,
A collective heartbeat in metropolitan refrains.`,
        gradientFrom: "rgba(249, 168, 212, 0.7)",
        gradientTo: "rgba(159, 122, 234, 0.7)",
        publishedDate: "April 2023"
      },
      {
        title: "Winter's Embrace",
        author: "Olivia Johnson",
        content: 
`Blankets of white silence the world,
Crystalline beauty in each frozen breath.
Tree branches with icicles pearled,
Nature in temporary death.

Footprints mark my solitary path,
Soon to be covered by falling snow.
The wind bites with gentle wrath,
As temperatures continue to drop low.

Inside, fire crackles with comforting heat,
Shadows dance across the wooden floor.
This seasonal retreat feels bittersweet,
As I wait behind the closed door.

Winter teaches patience and rest,
Before spring brings its colorful zest.`,
        gradientFrom: "rgba(109, 40, 217, 0.6)",
        gradientTo: "rgba(159, 122, 234, 0.8)",
        publishedDate: "January 2023"
      },
      {
        title: "Lost in Time",
        author: "David Lee",
        content: 
`Clock hands spin mercilessly forward,
Memories blurring at the edges.
Yesterday seems both distant and near,
Time defies all human pledges.

Faded photographs in dusty albums,
Moments captured but slowly fading.
Faces once familiar now seem strange,
As years keep steadily cascading.

I try to grasp each precious second,
Only to watch them slip through fingers.
The bittersweet taste of nostalgia lingers,
While future moments remain unbeckoned.

In this perpetual flow of moments passing,
I learn to cherish what is, not what was.`,
        gradientFrom: "rgba(159, 122, 234, 0.6)",
        gradientTo: "rgba(249, 168, 212, 0.8)",
        publishedDate: "September 2023"
      },
      {
        title: "Garden of Dreams",
        author: "Amara Singh",
        content: 
`Vibrant blooms reach for the sun,
Roots intertwined beneath the soil.
A tapestry of colors becomes undone,
As seasons change with nature's toil.

I plant seeds of hope in fertile ground,
Nurturing them with patience and care.
Some flourish while others aren't found,
Life's uncertainty beyond compare.

Butterflies dance from flower to flower,
Pollinators in this sanctuary I've made.
Each petal unfurls with quiet power,
Displaying patterns expertly laid.

This garden mirrors my inner landscape,
Wild and ordered, dying and reborn.`,
        gradientFrom: "rgba(249, 168, 212, 0.6)",
        gradientTo: "rgba(109, 40, 217, 0.6)",
        publishedDate: "March 2023"
      },
      {
        title: "Stargazer",
        author: "Leo Martinez",
        content: 
`Celestial bodies paint stories across the night canvas,
Ancient light guiding lost souls.
Constellations connect in cosmic choreography,
As the universe slowly unrolls.

I lie on cool grass, neck craned upward,
Searching for patterns in distant suns.
The vastness above both humbles and inspires,
As my imagination runs.

How small we are in this grand design,
Yet how wondrous to witness its display.
Each twinkling star a reminder divine,
Of worlds beyond our everyday.

The night sky holds answers to questions unasked,
In its infinite, sparkling mask.`,
        gradientFrom: "rgba(109, 40, 217, 0.5)",
        gradientTo: "rgba(249, 168, 212, 0.5)",
        publishedDate: "November 2023"
      },
      {
        title: "Echoes of You",
        author: "Nora Patel",
        content: 
`Your laughter still bounces off these walls,
A phantom presence in empty rooms.
I reach for memories as daylight falls,
Finding only shadows and lingering perfumes.

The space you occupied remains unfilled,
Though time has passed since your departure.
Conversations replay, never stilled,
Your absence an unfinished aperture.

I see you in strangers on busy streets,
A familiar gesture, the tilt of a head.
My heart races with momentary beats,
Before reality returns instead.

These echoes of you fade slower than I thought,
Love's resonance cannot be easily caught.`,
        gradientFrom: "rgba(159, 122, 234, 0.5)",
        gradientTo: "rgba(109, 40, 217, 0.5)",
        publishedDate: "February 2023"
      },
      {
        title: "Freedom's Call",
        author: "Thomas Wright",
        content: 
`Wings spread against azure skies,
Soaring above limitations and boundaries.
The wind carries dreams as it flies,
Beyond horizon's furthest foundries.

Chains of doubt and fear fall away,
As courage lifts the spirit higher.
Liberation found in break of day,
Inner strength a constant fire.

I stand at the edge of what could be,
Toes curled over precipice of change.
The leap required to truly be free,
Requires leaving comfort's range.

Freedom calls with siren song,
To those brave enough to belong.`,
        gradientFrom: "rgba(249, 168, 212, 0.5)",
        gradientTo: "rgba(159, 122, 234, 0.5)",
        publishedDate: "December 2023"
      }
    ];

    poemsData.forEach(poem => this.createPoem(poem));
  }
}

export const storage = new MemStorage();
