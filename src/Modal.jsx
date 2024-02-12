import React from "react";
import { motion } from "framer-motion";
import { Backdrop } from "./Backdrop";

export function Modal({ closeModal, text }) {
  const dropIn = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <Backdrop onClick={closeModal}>
      <motion.div
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
      >
        {/* Your modal content here */}
        <div className="message">
          <div className="message-group">
          <p>Hellu Shortcake,</p>
          <p>
            Bet you weren't expecting this hehehe. I know its not much but I
            just thought I would do something cute for Valentine's Day 😆. To be
            fair, I had this idea in my head for a long while, I mean I have
            been learning web dev, plus it gave me an excuse to learn React so😆
            (Apologies for this not being the best looking thing)
          </p>
          <p>
            I just wanted to say that you're amazing, both as my girlfriend and
            as my best friend. I haven't felt like this with anyone in a long
            while 😆. You're so caring, pretty and just nice to be around and
            hang out with. I always looked forward to seeing you in person
            during Uni and the times we get to call.
          </p>
          <p>
            I know things have been difficult, with the whole long distance and
            the uncertainty. I just want to remind you that I'm not giving up on
            this and I'll continue to support you as much as I can through it, I
            love you Mahina, and I want to spend the rest of my life with you
            Insyallah. I sound like a broken record for saying all this, and to
            be fair we are in a stalemate when it comes to making progress 😆
            But Insyallah we'll pull through and it will be worth it, we'll just
            keep praying and do our best 😊I love you now and thats not changing
            😊❤
          </p>
          <p>
            Also minor thing but I really hope you and your family recover soon
            😭 I'm still baffled by quickly all of you got sick 😆 Make sure to
            take your medicine and drink lots of water!
          </p>
          <p>- Minty</p>
          </div>
          {/*<button onClick={closeModal}>Close Modal</button>*/}
        </div>
      </motion.div>
    </Backdrop>
  );
}
