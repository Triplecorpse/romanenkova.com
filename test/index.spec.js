const expect = require('chai').expect;
const server = require('./../server/server.js');
const config = require('./../server/config.js');
const request = require('supertest');
const mongoose = require('mongoose');

const services = require('./../server/services/services.spec');
const routes = require('./../server/routes/index.spec');
