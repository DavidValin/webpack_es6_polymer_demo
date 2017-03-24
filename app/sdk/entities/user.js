"use strict";

import { Sdkzer } from "sdkzer/built/howerest.sdkzer"

/**
 * Handles a users resource
 */
export class User extends Sdkzer {

  baseEndpoint() {
    return "http://localhost:8000/api/v1/users";
  }

}
