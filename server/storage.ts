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
        title: "When Souls Collide",
        author: "Van Riev",
        content: 
`In pixel lines our fates aligned,
A whisper in a digital sea.
A spark unseen, yet so divine—
You wrote, and it rewrote me.

What started in a shadowed screen,
Became a light that pierced my soul.
You weren't just lines in code unseen,
You made my half at last feel whole.

Through usernames and text replies,
The world grew wide yet small with you.
In roleplay worlds and silent cries,
You brought me something real and true.

And when the mask of make-believe
Gave way to hearts without disguise,
The love I dared not to conceive
Was shining in your earthly eyes.`,
        gradientFrom: "rgba(109, 40, 217, 0.8)",
        gradientTo: "rgba(159, 122, 234, 0.8)",
        publishedDate: "January 2024"
      },
      {
        title: "Unang Usap, Pusong Lumipad",
        author: "Van Riev",
        content: 
`Sa bawat mensahe mong ibinubulong,
Parang awit sa gabi ng unos.
Ang puso kong dati'y pagod at kulong,
Ngayo'y malaya, puno ng rosas at rosas.

Tila musika ang iyong mga tanong,
May halong lambing at pananabik.
Ang damdamin ko'y unti-unting sumabog,
Sa bawat titig mong dumidikit.

Ang mga salita'y tila dasal,
Na galing sa langit, pino at banal.
Pagmamahalan natin, di aksidente—
Kundi plano ng Diyos na walang kapantay.

Hanggang ngayo'y tandang-tanda ko pa,
Unang pagtawag, unang tawa,
Sa piling mo, lahat ay nag-iba—
Dahil sa 'yo, ang mundo ko'y payapa.`,
        gradientFrom: "rgba(159, 122, 234, 0.8)",
        gradientTo: "rgba(249, 168, 212, 0.8)",
        publishedDate: "January 2024"
      },
      {
        title: "Depth Measured in Silence",
        author: "Van Riev",
        content: 
`We spoke beyond the spoken word,
Where silence held a sacred place.
Each gaze, each pause, each smile unheard—
Wove heaven's thread in time and space.

Our talks turned deep, like rivers wide,
With currents dark, yet flowing warm.
Your heart became my trusted guide,
A quiet truth in every storm.

You asked me things I feared to know,
Yet safe I felt beneath your stare.
Like autumn winds that gently blow,
You stripped me bare, but with care.

And so we grew—no haste, no race—
But constant as the moonlit tide.
Time did not dull, but gave us grace—
To know, to trust, to never hide.`,
        gradientFrom: "rgba(249, 168, 212, 0.8)",
        gradientTo: "rgba(109, 40, 217, 0.8)",
        publishedDate: "February 2024"
      },
      {
        title: "Ugnayang Maka-Diyos",
        author: "Van Riev",
        content: 
`Di lang puso ang pinagtagpo,
Kundi mga kaluluwang may layunin.
Pag-ibig nating ito'y regalo,
Banal na plano, hindi sapalarin.

Sa panalangin ko'y ika'y dumating,
Tulad ng tala sa gabi ng dilim.
Hindi aksidente, kundi pagpapala,
Pag-ibig natin ay sa Diyos nagmula.

Nagkakilala tayo hindi lang sa mundo,
Kundi sa presensya ng Espiritu.
Ikaw ang sagot sa dasal kong totoo—
Isang gabay, isang katuwang sa takbo.

Dahil kung si Kristo ang sentro natin,
Walang unos na kayang gibain.
Sa bawat dasal at salita ng pananalig,
Ang puso mo ang tahanan ng pag-ibig.`,
        gradientFrom: "rgba(109, 40, 217, 0.7)",
        gradientTo: "rgba(249, 168, 212, 0.7)",
        publishedDate: "February 2024"
      },
      {
        title: "When You First Said It",
        author: "Van Riev",
        content: 
`You said it like a candle lit—
Soft, unsure, but warm with flame.
The air stood still; I tasted it—
The moment when you spoke my name.

Three simple words, but thunder roared
Within my chest, too loud to tame.
Your voice became the holy chord
That made my world no longer same.

You said it not in grand parade,
But in a hush that shook my spine.
And from that whisper, love was made—
A vow that felt like God's design.

That day you chose to speak your heart,
You carved your name inside of mine.
You turned my dusk to sacred art,
And made the stars themselves align.`,
        gradientFrom: "rgba(159, 122, 234, 0.7)",
        gradientTo: "rgba(109, 40, 217, 0.7)",
        publishedDate: "March 2024"
      },
      {
        title: "Tama sa Lahat ng Paraan",
        author: "Van Riev",
        content: 
`Tila may awit sa bawat saglit
Nang tayo'y nagtagpo sa tamang oras.
Ang puso ko'y gumaan, naging payapa,
Parang ulan sa tagtuyot ng lunas.

Walang tanong kung bakit ikaw,
Lahat ng sagot ay nasa'yong mata.
Hindi ito pangkaraniwang pag-ibig—
Ito'y panatag, totoo, at may sigla.

Tama ka sa bawat mata kong lumuluha,
Sa bawat ngiting ngayo'y may saysay.
Sa 'yo ko nakita ang Diyos na buhay—
Na sa 'king panalangin, Siya'y tunay.

At kung ito'y panaginip lamang,
Ayoko nang magising pa kailanman.
Dahil sa piling mong may pagmamahal,
Tama ka—ikaw ang aking tahanan.`,
        gradientFrom: "rgba(249, 168, 212, 0.7)",
        gradientTo: "rgba(159, 122, 234, 0.7)",
        publishedDate: "March 2024"
      },
      {
        title: "Every Version of You",
        author: "Van Riev",
        content: 
`I love you in the morning light,
Before the world begins to spin.
When silence folds around the night,
You're where my truest thoughts begin.

I love the way your laughter sounds—
Like hymns that chase my ghosts away.
In you, my soul no longer drowns;
You are my calm, my break of day.

I love you when you're strong and wise,
And when you're lost in fear and doubt.
In every tear that wets your eyes,
I find more beauty pouring out.

I love you not for just your glow,
But for the dark you try to hide.
Nicole, my heart was built to know
The love in you—the you inside.`,
        gradientFrom: "rgba(109, 40, 217, 0.6)",
        gradientTo: "rgba(159, 122, 234, 0.8)",
        publishedDate: "March 2024"
      },
      {
        title: "Sa Bawat Segundo, Ikaw",
        author: "Van Riev",
        content: 
`Miss kita sa bawat hinga,
Sa pagitan ng mga bituin.
Sa bawat katahimikan ng gabi,
Ikaw ang sigaw ng damdamin.

Miss kita sa bawat 'di ko masabi,
Na sana'y ikaw ang kayakap.
Ang puso kong dati'y buo at matibay,
Ngayon ay nananabik, nanghihina't gapang.

Wala ka man sa aking tabi,
Ang alaala mo'y walang humpay.
Pilit kong inaarok ang gabi—
Nangungulila, umiiyak ng sabay.

Kung pwede lang sana ay yakapin ka,
Sa bawat oras na ako'y gising.
Sapat na ang iyong mga mata—
Upang mapawi ang bawat panimdim.`,
        gradientFrom: "rgba(159, 122, 234, 0.6)",
        gradientTo: "rgba(249, 168, 212, 0.8)",
        publishedDate: "April 2024"
      },
      {
        title: "One Last Name",
        author: "Van Riev",
        content: 
`I dream of days with quiet grace,
Where "Mrs. Aquino" is your name.
Where vows are more than spoken trace—
They're carved in time, in sacred flame.

I see us build a little home,
With laughter in the kitchen air.
A garden where our children roam,
And prayers that rise like morning prayer.

I dream of rings that time won't rust,
Of nights we spend with fingers twined.
Of growing old through love and trust—
With you, forever's not confined.

Nicole, my dream is not a place—
It's not a church, nor gown so white.
It's you beside me, face to face,
When love has won its final fight.`,
        gradientFrom: "rgba(249, 168, 212, 0.6)",
        gradientTo: "rgba(109, 40, 217, 0.6)",
        publishedDate: "April 2024"
      },
      {
        title: "Pambihirang Ganda",
        author: "Van Riev",
        content: 
`Sa bawat ngiti mong kay tamis,
Parang araw sa ulap ng lungkot.
Ang kutis mong tila porselanang bituin—
Sa 'king paningin, ikaw ang sagot.

'Pag ikaw ay ngumiti, bumabagal ang mundo,
Parang sining sa oras ng gulo.
At sa kilos mong puno ng lambing,
Puso ko'y naglalakbay sa alapaap na ginto.

Maging ang iyong pagkibit-balikat,
Ay para bang tula sa gabi ng buwan.
Nakakabighani, walang kapantay—
Isang obra maestra ng Maykapal.

Sexy hindi lang sa tingin, kundi sa diwa,
Sa bawat kilos mong banayad at buo.
Ikaw ang awit ng puso kong payapa,
Ang ganda mong di kayang itago.`,
        gradientFrom: "rgba(109, 40, 217, 0.5)",
        gradientTo: "rgba(249, 168, 212, 0.5)",
        publishedDate: "April 2024"
      },
      {
        title: "To Serve and Surrender",
        author: "Van Riev",
        content: 
`I do not lead in every way,
Nor claim to rule this gentle land.
For love is not who dares to stay,
But who kneels low and holds your hand.

I find my strength in yielding peace,
In letting you define the pace.
To trust your voice, and find release
In knowing I am in your grace.

I'd gladly rest beneath your reign,
Not out of weakness—but of love.
For even kings lay down their chain
To lift the one they're dreaming of.

Nicole, my heart is not a throne,
But open fields for you to sow.
If I must kneel to make it known,
Then let me kneel and let you glow.`,
        gradientFrom: "rgba(159, 122, 234, 0.5)",
        gradientTo: "rgba(109, 40, 217, 0.5)",
        publishedDate: "May 2024"
      },
      {
        title: "Magkasamang Naglilingkod",
        author: "Van Riev",
        content: 
`Sa simbahan, magkatabi tayo,
Mga kamay nating magkahawak.
Nagdarasal, kumakanta sa iisang puso—
Paglilingkod nating di matitinag.

Ikaw at ako, mga lingkod Niya,
Sa bawat salita't gawa, may saysay.
Tulad ng ilaw sa gabi ng problema,
Pag-ibig Niya'y ating gabay.

Magsasama sa bawat misyon,
Maging tagapagturo o tagapangalaga.
Sa mata ng Diyos, tayo'y isa—
Nag-aalay ng buhay na may halaga.

Hindi lang ikaw ang mahal ko,
Kundi ang Diyos na bumuo sa atin.
Maglilingkod tayo habang-buhay,
Hanggang langit, sabay nating marating.`,
        gradientFrom: "rgba(249, 168, 212, 0.5)",
        gradientTo: "rgba(159, 122, 234, 0.5)",
        publishedDate: "May 2024"
      }
    ];

    poemsData.forEach(poem => this.createPoem(poem));
  }
}

export const storage = new MemStorage();
