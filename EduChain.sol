{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // SPDX-License-Identifier: MIT\
pragma solidity ^0.8.0;\
\
contract EduChain \{\
    struct Course \{\
        string courseTitle;\
        address educator;\
        uint price;\
        bool isLive;\
    \}\
\
    struct Certificate \{\
        uint courseId;\
        address student;\
        bool hasCompleted;\
        bool issued;\
    \}\
\
    mapping(uint => Course) public courses;\
    mapping(uint => Certificate) public certificates;\
    uint public courseCount;\
\
    function createCourse(string memory _title, uint _price) public \{\
        courses[courseCount] = Course(_title, msg.sender, _price, true);\
        courseCount++;\
    \}\
\
    function enrollCourse(uint _courseId) public payable \{\
        Course memory course = courses[_courseId];\
        require(msg.value >= course.price, "Insufficient funds");\
        certificates[_courseId] = Certificate(_courseId, msg.sender, false, false);\
    \}\
\
    function completeCourse(uint _courseId) public \{\
        Certificate storage cert = certificates[_courseId];\
        require(cert.student == msg.sender, "Not enrolled in this course");\
        cert.hasCompleted = true;\
    \}\
\}\
}