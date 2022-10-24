export class Serie {
    private _id: number; 
    private _name: string;
    private _channel: string;
    private _seasons: number;
    private _description: string;
    private _link: string;
    private _cover: string;
    
    constructor(_id: number, _name: string, _channel: string, _seasons: number, _description: string, _link: string, _cover: string) {
        this._id = _id;
        this._name = _name;
        this._channel = _channel; 
        this._seasons = _seasons;
        this._description = _description;
        this._link = _link;
        this._cover = _cover;
    }

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter title
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter channel
     * @return {string}
     */
	public get channel(): string {
		return this._channel;
	}

    /**
     * Getter seasons
     * @return {number}
     */
	public get seasons(): number {
		return this._seasons;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter link
     * @return {string}
     */
	public get link(): string {
		return this._link;
	}

    /**
     * Getter cover
     * @return {string}
     */
	public get cover(): string {
		return this._cover;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter title
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter channel
     * @param {string} value
     */
	public set channel(value: string) {
		this._channel = value;
	}

    /**
     * Setter seasons
     * @param {number} value
     */
	public set seasons(value: number) {
		this._seasons = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter link
     * @param {string} value
     */
	public set link(value: string) {
		this._link = value;
	}

    /**
     * Setter cover
     * @param {string} value
     */
	public set cover(value: string) {
		this._cover = value;
	}

  }