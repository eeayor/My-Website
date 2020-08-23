# Pretty Good Privacy
 
 PGP or Pretty Good Privacy has been around since the 1990s but what is PGP and how can you use PGP in your life? PGP is an encryption type that uses a combonation of various algorithms in order to encrypt messages. Why this may be useful for you is obviously if you want to send messages privately.
 
 The first step to actually using pgp is to have a program that generates pgp keys. The most common way to do this is with gpg, which is built into most unix based systems. if you do not have gpg there's probably a way to install it so just look that up on the internet.
 
 The second step is to generate your keys with the command `gpg --full-generate-key` this will bring you through a process, that will generate both your public and private keys along with your revocation key.

 Now that you have generated your key you might want to send your public key off onto a key server so that your friends can retrive it, in order to encrypt messages to you. to do this you want to `gpg --output [YOURNAME].key --armor --export [YOUREMAIL]` what armor does is it generates an ascii armor output instead of a binary. Now you can view your public key with `cat [YOURNAME].key` and share it on public key servers. I use pgp.key-server.io but you can also use pgp.mit.edu or other popular key servers. When you go to their websites you can just copy paste to the submit a key box. Alternitvely you could use your fingerprint that you get from the command `gpg --fingerprint [YOUREMAIL]` then `gpg --send-keys --keyserver pgp.key-server.io [FINGERPRINT]` now your public key is avalible on a public key server!
 
 Now you may want to get your friends public key from a key server in order to encrypt your messages to them. `gpg --keyserver pgp.key-server.io --search-keys [FRIENDSEMAIL]` press 1 or the number of which key public key is the same as your friends, assuming that you have a channel to communicate with them try to verify that the public key you pulled down is actually theirs by checking with `gpg --fingerprint [FRIENDSEMAIL]` and cross checking that with the fingerprint of your friends pubkey. Given that it matches you want to sign the key now with `gpg --sign-key [FRIENDSEMAIL]`.
 
 Congrats you have finnished the main part of this process, now that you have completed that you may want to now actually encrpyt and decrypt messages sent from and to you. So how do that is `gpg --encrypt --sign --armor -r [FRIENDSEMAIL]` and decrypt with `gpg --decrypt [INPUT].txt.asc > [OUTPUTFILE]` now you can view a message with `cat [OUTPUTFILE]`!
 
 Original article that I stole 90% of this from [here](https://www.howtogeek.com/427982/how-to-encrypt-and-decrypt-files-with-gpg-on-linux) I just modified the parts I thought may be a little confusing and the order because I found the order to be kind of bad as well as some of the programs and commands I used are very different.
