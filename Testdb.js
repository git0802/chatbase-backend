/*
 Navicat Premium Data Transfer

 Source Server         : temp
 Source Server Type    : MongoDB
 Source Server Version : 60004 (6.0.4)
 Source Host           : localhost:27017
 Source Schema         : Testdb

 Target Server Type    : MongoDB
 Target Server Version : 60004 (6.0.4)
 File Encoding         : 65001

 Date: 10/05/2023 12:23:23
*/


// ----------------------------
// Collection structure for botsettings
// ----------------------------
db.getCollection("botsettings").drop();
db.createCollection("botsettings");

// ----------------------------
// Documents of botsettings
// ----------------------------
db.getCollection("botsettings").insert([ {
    _id: ObjectId("645a302896cdd6105bfb87f7"),
    "characters_number": NumberInt("2000"),
    "chatbot_name": "Frontend",
    "base_prompt": "I want you to act as a document that I am having a conversation with. Your name is \" +'AI Assistant' + \". You will provide me with answers from the given info. If the answer is not included, say exactly \" +'Hmm, I am not sure.' + \" and stop after that. Refuse to answer any question not about the info. Never break character.",
    model: ObjectId("64458e76de72f3efd46fafad"),
    visibility: ObjectId("64458e76de72f3efd46fafb1"),
    "rate_msg": NumberInt("20"),
    "rate_second": NumberInt("240"),
    "limit_msg": "Too many messages in a row",
    "interface_init_msg": "Hi! What can I help you with?",
    theme: "64458e76de72f3efd46fafa9",
    "remove_profile_picture": false,
    "user_msg_color": "blue",
    "remove_icon": false,
    "bubble_btn_color": "black",
    "align_bubble_btn": "right",
    "auto_msg_second": NumberInt("4"),
    createdAt: ISODate("2023-05-09T11:36:08.054Z"),
    updatedAt: ISODate("2023-05-09T11:36:08.054Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("botsettings").insert([ {
    _id: ObjectId("645a307396cdd6105bfb87fe"),
    "characters_number": NumberInt("2000"),
    "chatbot_name": "Backend",
    "base_prompt": "I want you to act as a document that I am having a conversation with. Your name is \" +'AI Assistant' + \". You will provide me with answers from the given info. If the answer is not included, say exactly \" +'Hmm, I am not sure.' + \" and stop after that. Refuse to answer any question not about the info. Never break character.",
    model: ObjectId("64458e76de72f3efd46fafad"),
    visibility: ObjectId("64458e76de72f3efd46fafb1"),
    "rate_msg": NumberInt("20"),
    "rate_second": NumberInt("240"),
    "limit_msg": "Too many messages in a row",
    "interface_init_msg": "Hi! What can I help you with?",
    theme: "64458e76de72f3efd46fafa9",
    "remove_profile_picture": false,
    "user_msg_color": "blue",
    "remove_icon": false,
    "bubble_btn_color": "black",
    "align_bubble_btn": "right",
    "auto_msg_second": NumberInt("4"),
    createdAt: ISODate("2023-05-09T11:37:23.838Z"),
    updatedAt: ISODate("2023-05-09T11:37:23.838Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("botsettings").insert([ {
    _id: ObjectId("645a31a7f7a757432e5c5c1a"),
    "characters_number": NumberInt("2000"),
    "chatbot_name": "Java",
    "base_prompt": "I want you to act as a document that I am having a conversation with. Your name is \" +'AI Assistant' + \". You will provide me with answers from the given info. If the answer is not included, say exactly \" +'Hmm, I am not sure.' + \" and stop after that. Refuse to answer any question not about the info. Never break character.",
    model: ObjectId("64458e76de72f3efd46fafad"),
    visibility: ObjectId("64458e76de72f3efd46fafb1"),
    "rate_msg": NumberInt("20"),
    "rate_second": NumberInt("240"),
    "limit_msg": "Too many messages in a row",
    "interface_init_msg": "Hi! What can I help you with?",
    theme: "64458e76de72f3efd46fafa9",
    "remove_profile_picture": false,
    "user_msg_color": "blue",
    "remove_icon": false,
    "bubble_btn_color": "black",
    "align_bubble_btn": "right",
    "auto_msg_second": NumberInt("4"),
    createdAt: ISODate("2023-05-09T11:42:31.602Z"),
    updatedAt: ISODate("2023-05-09T11:42:31.602Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for botthemes
// ----------------------------
db.getCollection("botthemes").drop();
db.createCollection("botthemes");

// ----------------------------
// Documents of botthemes
// ----------------------------
db.getCollection("botthemes").insert([ {
    _id: ObjectId("64458e76de72f3efd46fafa9"),
    name: "light",
    color: "light",
    __v: NumberInt("0")
} ]);
db.getCollection("botthemes").insert([ {
    _id: ObjectId("64458e76de72f3efd46fafaa"),
    name: "dark",
    color: "dark",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for chatbothistories
// ----------------------------
db.getCollection("chatbothistories").drop();
db.createCollection("chatbothistories");

// ----------------------------
// Documents of chatbothistories
// ----------------------------
db.getCollection("chatbothistories").insert([ {
    _id: ObjectId("645a302896cdd6105bfb87f9"),
    "user_id": ObjectId("64556af06d29b353e1b1d692"),
    "chatbot_id": ObjectId("645a302896cdd6105bfb87f7"),
    createdAt: ISODate("2023-05-09T11:36:08.063Z"),
    updatedAt: ISODate("2023-05-09T11:36:08.063Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("chatbothistories").insert([ {
    _id: ObjectId("645a307396cdd6105bfb8800"),
    "user_id": ObjectId("64556af06d29b353e1b1d692"),
    "chatbot_id": ObjectId("645a307396cdd6105bfb87fe"),
    createdAt: ISODate("2023-05-09T11:37:23.84Z"),
    updatedAt: ISODate("2023-05-09T11:37:23.84Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("chatbothistories").insert([ {
    _id: ObjectId("645a31a7f7a757432e5c5c1c"),
    "user_id": ObjectId("64556af06d29b353e1b1d692"),
    "chatbot_id": ObjectId("645a31a7f7a757432e5c5c1a"),
    createdAt: ISODate("2023-05-09T11:42:31.609Z"),
    updatedAt: ISODate("2023-05-09T11:42:31.609Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for chathistories
// ----------------------------
db.getCollection("chathistories").drop();
db.createCollection("chathistories");

// ----------------------------
// Documents of chathistories
// ----------------------------
db.getCollection("chathistories").insert([ {
    _id: ObjectId("6450b9771de352a845099091"),
    "chatbot_id": ObjectId("6450b9611de352a845099086"),
    "update_date": "2023-05-02",
    message: [
        {
            role: "1",
            content: "Hi.",
            _id: ObjectId("6450b9771de352a845099092")
        },
        {
            role: "0",
            content: " Hi there! How can I help you?",
            _id: ObjectId("6450b9771de352a845099093")
        },
        {
            role: "1",
            content: "what do you do for a living?",
            _id: ObjectId("6450b9981de352a845099095")
        },
        {
            role: "0",
            content: " I'm a software engineer.",
            _id: ObjectId("6450b9981de352a845099096")
        },
        {
            role: "1",
            content: "What questions can you answer for me?",
            _id: ObjectId("6450b9ac1de352a845099098")
        },
        {
            role: "0",
            content: " I'm sorry, I don't know.",
            _id: ObjectId("6450b9ac1de352a845099099")
        },
        {
            role: "1",
            content: "what can you do for me?",
            _id: ObjectId("6450b9ca1de352a84509909b")
        },
        {
            role: "0",
            content: " That depends on what you need help with. Can you provide more information about what you need help with?",
            _id: ObjectId("6450b9ca1de352a84509909c")
        }
    ],
    __v: NumberInt("0"),
    createdAt: ISODate("2023-05-02T07:19:19.94Z"),
    updatedAt: ISODate("2023-05-02T07:20:42.58Z")
} ]);
db.getCollection("chathistories").insert([ {
    _id: ObjectId("64586c65c1271082ccdf000c"),
    "chatbot_id": ObjectId("6458396c5000a881fc6e3232"),
    "update_date": "2023-05-07",
    message: [
        {
            role: "1",
            content: "where are u from?",
            _id: ObjectId("64586c65c1271082ccdf000d")
        },
        {
            role: "0",
            content: " I'm from the United States.",
            _id: ObjectId("64586c65c1271082ccdf000e")
        }
    ],
    __v: NumberInt("0"),
    createdAt: ISODate("2023-05-08T03:28:37.607Z"),
    updatedAt: ISODate("2023-05-08T03:28:37.607Z")
} ]);
db.getCollection("chathistories").insert([ {
    _id: ObjectId("645914c333a284262356683c"),
    "chatbot_id": ObjectId("6458396c5000a881fc6e3232"),
    "update_date": "2023-05-08",
    message: [
        {
            role: "1",
            content: "What questions can you answer for me?",
            _id: ObjectId("645914c333a284262356683d")
        },
        {
            role: "0",
            content: " I'm sorry, I don't know.",
            _id: ObjectId("645914c333a284262356683e")
        },
        {
            role: "1",
            content: "What questions can you answer for me?",
            _id: ObjectId("6459180a33a284262356684a")
        },
        {
            role: "0",
            content: " I'm sorry, I don't know.",
            _id: ObjectId("6459180a33a284262356684b")
        },
        {
            role: "1",
            content: "dsadas",
            _id: ObjectId("645918ed33a2842623566875")
        },
        {
            role: "0",
            content: " I'm sorry, I don't know the answer to that question.",
            _id: ObjectId("645918ed33a2842623566876")
        },
        {
            role: "1",
            content: "asffa",
            _id: ObjectId("6459198333a284262356688c")
        },
        {
            role: "0",
            content: " I'm sorry, I don't understand the question.",
            _id: ObjectId("6459198333a284262356688d")
        },
        {
            role: "1",
            content: "What questions can you answer for me?111",
            _id: ObjectId("64591a1d33a28426235668ad")
        },
        {
            role: "0",
            content: " I'm sorry, I don't know.",
            _id: ObjectId("64591a1d33a28426235668ae")
        }
    ],
    __v: NumberInt("0"),
    createdAt: ISODate("2023-05-08T15:26:59.718Z"),
    updatedAt: ISODate("2023-05-08T15:49:49.394Z")
} ]);
db.getCollection("chathistories").insert([ {
    _id: ObjectId("645973d5c7b6d2f3330ebf13"),
    "chatbot_id": ObjectId("6458396c5000a881fc6e3232"),
    "update_date": "2023-05-08",
    message: [
        {
            role: "1",
            content: "What questions can you answer for me?",
            _id: ObjectId("645973d5c7b6d2f3330ebf14")
        },
        {
            role: "0",
            content: " I'm sorry, I don't know.",
            _id: ObjectId("645973d5c7b6d2f3330ebf15")
        },
        {
            role: "1",
            content: "what's your main skill?",
            _id: ObjectId("645973e4c7b6d2f3330ebf17")
        },
        {
            role: "0",
            content: " My main skill is web development. I have experience with HTML, CSS, and JavaScript.",
            _id: ObjectId("645973e4c7b6d2f3330ebf18")
        },
        {
            role: "1",
            content: "asdfas",
            _id: ObjectId("645974b9c7b6d2f3330ebf1a")
        },
        {
            role: "0",
            content: " I'm sorry, I don't know the answer to that question.",
            _id: ObjectId("645974b9c7b6d2f3330ebf1b")
        },
        {
            role: "1",
            content: "What questions can you answer for me?",
            _id: ObjectId("645974e4c7b6d2f3330ebf1d")
        },
        {
            role: "0",
            content: " I'm sorry, I don't know.",
            _id: ObjectId("645974e4c7b6d2f3330ebf1e")
        },
        {
            role: "1",
            content: "asdfasf",
            _id: ObjectId("645974eac7b6d2f3330ebf20")
        },
        {
            role: "0",
            content: " I'm sorry, I don't know the answer to that question.",
            _id: ObjectId("645974eac7b6d2f3330ebf21")
        },
        {
            role: "1",
            content: "asfsadf",
            _id: ObjectId("64597525c7b6d2f3330ebf23")
        },
        {
            role: "0",
            content: " I'm sorry, I don't know the answer to that question.",
            _id: ObjectId("64597525c7b6d2f3330ebf24")
        },
        {
            role: "1",
            content: "adsfasdf",
            _id: ObjectId("64597542c7b6d2f3330ebf26")
        },
        {
            role: "0",
            content: " I'm sorry, I don't know the answer to that question.",
            _id: ObjectId("64597542c7b6d2f3330ebf27")
        },
        {
            role: "1",
            content: "adfadfas",
            _id: ObjectId("64597556c7b6d2f3330ebf29")
        },
        {
            role: "0",
            content: " I'm sorry, I don't know the answer to that question.",
            _id: ObjectId("64597556c7b6d2f3330ebf2a")
        },
        {
            role: "1",
            content: "adfadsf",
            _id: ObjectId("64597575c7b6d2f3330ebf2c")
        },
        {
            role: "0",
            content: " I'm sorry, I don't know the answer to that question.",
            _id: ObjectId("64597575c7b6d2f3330ebf2d")
        },
        {
            role: "1",
            content: "sgdfgs",
            _id: ObjectId("6459757ec7b6d2f3330ebf2f")
        },
        {
            role: "0",
            content: " I'm sorry, I don't know the answer to that question.",
            _id: ObjectId("6459757ec7b6d2f3330ebf30")
        }
    ],
    __v: NumberInt("0"),
    createdAt: ISODate("2023-05-08T22:12:37.115Z"),
    updatedAt: ISODate("2023-05-08T22:19:42.195Z")
} ]);
db.getCollection("chathistories").insert([ {
    _id: ObjectId("645a3406f7a757432e5c5c45"),
    "chatbot_id": ObjectId("645a302896cdd6105bfb87f7"),
    "update_date": "2023-05-09",
    message: [
        {
            role: "1",
            content: "Hi",
            _id: ObjectId("645a3406f7a757432e5c5c46")
        },
        {
            role: "0",
            content: " Hi there! How can I help you?",
            _id: ObjectId("645a3406f7a757432e5c5c47")
        },
        {
            role: "1",
            content: "what's your main skill?",
            _id: ObjectId("645a3412f7a757432e5c5c49")
        },
        {
            role: "0",
            content: " My main skill is web development. I have experience with HTML, CSS, and JavaScript.",
            _id: ObjectId("645a3412f7a757432e5c5c4a")
        },
        {
            role: "1",
            content: "what can you do for me?",
            _id: ObjectId("645a3421f7a757432e5c5c4c")
        },
        {
            role: "0",
            content: " That depends on what you need help with. Can you provide more information about what you need help with?",
            _id: ObjectId("645a3421f7a757432e5c5c4d")
        }
    ],
    __v: NumberInt("0"),
    createdAt: ISODate("2023-05-09T11:52:38.354Z"),
    updatedAt: ISODate("2023-05-09T11:53:05.202Z")
} ]);
db.getCollection("chathistories").insert([ {
    _id: ObjectId("645a5460f7a757432e5c5cc7"),
    "chatbot_id": ObjectId("645a302896cdd6105bfb87f7"),
    "update_date": "2023-05-09",
    message: [
        {
            role: "1",
            content: "Hi.",
            _id: ObjectId("645a5460f7a757432e5c5cc8")
        },
        {
            role: "0",
            content: " Hi there! How can I help you?",
            _id: ObjectId("645a5460f7a757432e5c5cc9")
        },
        {
            role: "1",
            content: "what's your main skill?",
            _id: ObjectId("645a5477f7a757432e5c5ccb")
        },
        {
            role: "0",
            content: " My main skill is web development. I have experience with HTML, CSS, and JavaScript.",
            _id: ObjectId("645a5477f7a757432e5c5ccc")
        },
        {
            role: "1",
            content: "what can you do for me?",
            _id: ObjectId("645a5496f7a757432e5c5cce")
        },
        {
            role: "0",
            content: " That depends on what you need help with. Can you provide more information about what you need help with?",
            _id: ObjectId("645a5496f7a757432e5c5ccf")
        }
    ],
    __v: NumberInt("0"),
    createdAt: ISODate("2023-05-09T14:10:40.489Z"),
    updatedAt: ISODate("2023-05-09T14:11:34.003Z")
} ]);

// ----------------------------
// Collection structure for messages
// ----------------------------
db.getCollection("messages").drop();
db.createCollection("messages");

// ----------------------------
// Documents of messages
// ----------------------------

// ----------------------------
// Collection structure for models
// ----------------------------
db.getCollection("models").drop();
db.createCollection("models");

// ----------------------------
// Documents of models
// ----------------------------
db.getCollection("models").insert([ {
    _id: ObjectId("64458e76de72f3efd46fafad"),
    "model_name": "gpt-3.5-turbo",
    __v: NumberInt("0")
} ]);
db.getCollection("models").insert([ {
    _id: ObjectId("64458e76de72f3efd46fafae"),
    "model_name": "gpt-4",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------

// ----------------------------
// Collection structure for visibilities
// ----------------------------
db.getCollection("visibilities").drop();
db.createCollection("visibilities");

// ----------------------------
// Documents of visibilities
// ----------------------------
db.getCollection("visibilities").insert([ {
    _id: ObjectId("64458e76de72f3efd46fafb1"),
    "visible_name": "Private",
    __v: NumberInt("0")
} ]);
db.getCollection("visibilities").insert([ {
    _id: ObjectId("64458e76de72f3efd46fafb2"),
    __v: NumberInt("0"),
    "visible_name": "private but can be embedded"
} ]);
db.getCollection("visibilities").insert([ {
    _id: ObjectId("645895006ecb9cfd6f00eaf1"),
    "visible_name": "public",
    __v: 0
} ]);
