import { Injectable } from '@angular/core';
import * as idbLib from 'idb';

@Injectable()
export class IndexdbService {

  public readonly  names = {
    dbName: 'indexeddb',
    wordsStorage: 'words-storage',
    dictionariesStorage: 'dictionaries-storage'
  };
  private dbPromise;
  constructor() {
    this.dbPromise = idbLib.default.open(this.names.dbName, 1, upgradeDB => {
      upgradeDB.createObjectStore(this.names.dictionariesStorage);
      upgradeDB.createObjectStore(this.names.wordsStorage);
    });
  }
  get = function(key: string, storageName: string) {
      return this.dbPromise.then(db => {
        return db.transaction(storageName)
          .objectStore(storageName).get(key);
      });
    };
  set = function(key, val, storageName: string) {
      return this.dbPromise.then(db => {
        const tx = db.transaction(storageName, 'readwrite');
        tx.objectStore(storageName).put(val, key);
        return tx.complete;
      });
    };
  delete = function(key, storageName: string) {
      return this.dbPromise.then(db => {
        const tx = db.transaction(storageName, 'readwrite');
        tx.objectStore(storageName).delete(key);
        return tx.complete;
      });
    };
  clear = function(storageName: string) {
      return this.dbPromise.then(db => {
        const tx = db.transaction(storageName, 'readwrite');
        tx.objectStore(storageName).clear();
        return tx.complete;
      });
    };
  keys = function(storageName: string) {
      return this.dbPromise.then(db => {
        const tx = db.transaction(storageName);
        const keys = [];
        const store = tx.objectStore(storageName);
        // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
        // openKeyCursor isn't supported by Safari, so we fall back
        (store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
          if (!cursor) { return; }
          keys.push(cursor.key);
          cursor.continue();
        });
        return tx.complete.then(() => keys);
      });
    };
  }


export class Db {
  private static db;
  private static dbVersionMin = 3;

  public static readonly  dbName = 'indexeddb';
  public static readonly  wordsStorage = 'words-storage';
  public static readonly  dictionariesStorage = 'dictionaries-storage';

  public static openDb(dbVersion = 0, callback) {
    console.log('openDb ...');
    const req = indexedDB.open(Db.dbName, Math.max(dbVersion, Db.dbVersionMin));
    req.onsuccess = function (evt) {
      Db.db = this.result;
      console.log('openDb DONE');
      callback();
    };
    req.onerror = function (evt: any) {
      console.error('openDb:', evt.target.errorCode);
    };

    req.onupgradeneeded = function (evt: any) {
     console.log('openDb.onupgradeneeded');
     const thisDB = evt.target.result;
     if (!thisDB.objectStoreNames.contains(Db.dictionariesStorage)) {
      const store = thisDB.createObjectStore(
        Db.dictionariesStorage, { keyPath: 'id', autoIncrement: true });
        store.createIndex('dictionary', 'dictionary', { unique: false });
        store.createIndex('user', 'user', { unique: false });
      }
      if (!thisDB.objectStoreNames.contains(Db.wordsStorage)) {
        const store = thisDB.createObjectStore(
          Db.wordsStorage, { keyPath: 'id', autoIncrement: true });
        }
    };
  }

  public static put(storage, data) {
    Db.getObjectStore(storage, 'readwrite').put(data);
  }
  public static getCursor(storage, id, callback) {
    const res = Db.getObjectStore(storage, 'readwrite').openCursor(id);
    res.onsuccess = function(event: any){
      if ( event.target.result ) {callback(event.target.result); }
    };
  }
  public static getByIndex(storage, index, id, callback) {
    const qwe = Db.getObjectStore(storage, 'readwrite').index(index).openCursor(id);
    qwe.onsuccess = function(event: any){
      const res = event.target.result;
      console.log(res);
      if ( event.target.result) { callback(event.target.result); }
    };
  }
  public static getObjectStore(store_name, mode): IDBObjectStore {
    const tx = Db.db.transaction(store_name, mode);
    return tx.objectStore(store_name);
  }
  public static getBlob(key, store, success_callback) {
    const req = store.get(key);
    req.onsuccess = function(evt) {
      const value = evt.target.result;
      if (value) {
        success_callback(value.blob);
      }
    };
  }
}
/*
@Injectable()
export class IndexdbService {
  constructor() {}
  Do() {
    Db.openDb(0, function(){
      console.log('do...');
      Db.put(Db.wordsStorage, {id: '1', text: 1, tranlation: 1} );
      Db.put(Db.wordsStorage, {id: '2', text: 2, tranlation: 2} );
      Db.put(Db.wordsStorage, {id: '3', text: 3, tranlation: 3} );

      Db.put(Db.dictionariesStorage, {id: '1', user: '1', dictionary: '1', words: [1, 2, 3, 4, 5]});
      Db.put(Db.dictionariesStorage, {id: '2', user: '1', dictionary: '2', words: [1, 2, 3, 4, 5]});
      Db.put(Db.dictionariesStorage, {id: '3', user: '1', dictionary: '3', words: [1, 2, 3, 4, 5]});
      Db.put(Db.dictionariesStorage, {id: '4', user: '4', dictionary: '4', words: [1, 2, 3, 4, 5]});
      Db.put(Db.dictionariesStorage, {id: '5', user: '5', dictionary: '5', words: [1, 2, 3, 4, 5]});

      Db.getByIndex(Db.dictionariesStorage, 'user', "1", function(event){
        console.log(event.value);
        event.continue();
      });
      console.log('do done');
    });
  }
} */
