export declare class PushModule {
    requestUserPermission(): Promise<boolean | undefined>;
    _updateTokenToServer: () => Promise<string | null>;
    backgroundMessage(): void;
    clickPushMessage(): void;
}
